import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { PriceItem } from './pricing-store';

export interface BudgetItem {
  id: string;
  treatment: string;
  quantity: number;
  unitPrice: number;
  currency: 'MXN' | 'USD';
  discount: { type: 'percentage' | 'amount'; value: number };
  total: number;
}

interface DiagnosisData {
  description: string;
  [key: string]: any;
}

const calculateTotal = (
  item: Omit<BudgetItem, 'id' | 'treatment' | 'total'>
): number => {
  const baseTotal = item.quantity * item.unitPrice;
  if (item.discount.type === 'percentage') {
    const discountAmount = baseTotal * (item.discount.value / 100);
    return Math.max(0, baseTotal - discountAmount);
  }
  // For fixed amount discount, just subtract the value
  const discountAmount = item.discount.value;
  return Math.max(0, baseTotal - discountAmount);
};


export interface TreatmentPlanState {
  diagnosis: string[];
  budgetItems: BudgetItem[];
  globalDiscount: { type: 'percentage' | 'amount'; value: number };
  
  importDiagnosis: (jsonString: string, priceList: PriceItem[]) => boolean;
  addBudgetItem: (item: Omit<BudgetItem, 'id' | 'total'>) => void;
  updateBudgetItem: (id: string, updates: Partial<Omit<BudgetItem, 'id' | 'total'>>) => void;
  removeBudgetItem: (id: string) => void;
  applyGlobalDiscount: (discount: { type: 'percentage' | 'amount'; value: number }) => void;
  resetState: () => void;
}

const getInitialState = (): Omit<TreatmentPlanState, 'importDiagnosis' | 'addBudgetItem' | 'updateBudgetItem' | 'removeBudgetItem' | 'applyGlobalDiscount' | 'resetState'> => ({
  diagnosis: [],
  budgetItems: [],
  globalDiscount: { type: 'percentage', value: 0 },
});

export const useTreatmentPlanStore = create<TreatmentPlanState>()(
  devtools(
    persist(
      (set) => ({
        ...getInitialState(),
        importDiagnosis: (jsonString: string, priceList: PriceItem[]) => {
          try {
            const parsedData = JSON.parse(jsonString);
            if ((parsedData.type !== 'treatment' && parsedData.type !== 'diagnosis') || !Array.isArray(parsedData.data)) {
              console.error("Invalid diagnosis/treatment JSON format.");
              return false;
            }
            
            const descriptions: string[] = parsedData.data
              .map((item: DiagnosisData) => item.description)
              .filter((desc: string | undefined): desc is string => !!desc);

            const treatmentCounts = new Map<string, number>();
            descriptions.forEach(desc => {
              const parts = desc.split(': ');
              if (parts.length > 1) {
                const treatmentName = parts[1].trim();
                treatmentCounts.set(treatmentName, (treatmentCounts.get(treatmentName) || 0) + 1);
              }
            });

            const newBudgetItems: BudgetItem[] = [];
            for (const [treatmentName, quantity] of treatmentCounts.entries()) {
              const priceListItem = priceList.find(p => p.name.toLowerCase() === treatmentName.toLowerCase());
              
              const newItemData = {
                treatment: treatmentName,
                quantity: quantity,
                unitPrice: priceListItem?.price ?? 0,
                currency: priceListItem?.currency ?? 'MXN',
                discount: { type: 'percentage' as const, value: 0 },
              };
    
              const newBudgetItem: BudgetItem = {
                ...newItemData,
                id: `${new Date().getTime()}-${treatmentName.replace(/\s/g, '')}`,
                total: calculateTotal(newItemData),
              };
              newBudgetItems.push(newBudgetItem);
            }

            set({ 
              diagnosis: descriptions,
              budgetItems: newBudgetItems,
              globalDiscount: { type: 'percentage', value: 0 },
            });
            return true;
          } catch (e) {
            console.error('Failed to parse or process diagnosis/treatment JSON', e);
            return false;
          }
        },
        addBudgetItem: (item) => {
          set((state) => {
            const newItem: BudgetItem = {
              ...item,
              id: new Date().getTime().toString(),
              total: calculateTotal(item),
            };
            return { budgetItems: [...state.budgetItems, newItem] };
          });
        },
        updateBudgetItem: (id, updates) => {
          set((state) => ({
            budgetItems: state.budgetItems.map((item) => {
              if (item.id === id) {
                const updatedItem = { ...item, ...updates };
                return {
                  ...updatedItem,
                  total: calculateTotal(updatedItem),
                };
              }
              return item;
            }),
          }));
        },
        removeBudgetItem: (id) => {
          set((state) => ({
            budgetItems: state.budgetItems.filter((item) => item.id !== id),
          }));
        },
        applyGlobalDiscount: (discount) => {
          set({ globalDiscount: discount });
        },
        resetState: () => set(getInitialState()),
      }),
      {
        name: 'treatment-plan-storage',
      }
    )
  )
);
