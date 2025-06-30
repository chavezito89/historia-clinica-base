import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
  return Math.max(0, baseTotal - item.discount.value);
};


export interface TreatmentPlanState {
  diagnosis: string[];
  budgetItems: BudgetItem[];
  globalDiscount: { type: 'percentage' | 'amount'; value: number };
  
  importDiagnosis: (jsonString: string) => boolean;
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
        importDiagnosis: (jsonString: string) => {
          try {
            const parsedData = JSON.parse(jsonString);
            if ((parsedData.type !== 'treatment' && parsedData.type !== 'diagnosis') || !Array.isArray(parsedData.data)) {
              console.error("Invalid diagnosis/treatment JSON format. Expected 'type: \"treatment\"' or 'type: \"diagnosis\"'.");
              return false;
            }
            const descriptions: string[] = parsedData.data
              .map((item: DiagnosisData) => item.description)
              .filter((desc: string | undefined): desc is string => !!desc);
            set({ diagnosis: descriptions });
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
