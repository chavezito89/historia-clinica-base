import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface BudgetItem {
  id: string;
  treatment: string;
  quantity: number;
  unitPrice: number;
  discount: { type: 'percentage' | 'amount'; value: number };
  total: number;
}

interface DiagnosisData {
  description: string;
  [key: string]: any;
}

export interface TreatmentPlanState {
  diagnosis: string[];
  budgetItems: BudgetItem[];
  currency: 'MXN' | 'USD';
  globalDiscount: { type: 'percentage' | 'amount'; value: number };
  
  setCurrency: (currency: 'MXN' | 'USD') => void;
  importDiagnosis: (jsonString: string) => boolean;
  // Placeholder for future actions
  addBudgetItem: (item: Omit<BudgetItem, 'id' | 'total'>) => void;
  updateBudgetItem: (id: string, updates: Partial<BudgetItem>) => void;
  removeBudgetItem: (id: string) => void;
  applyGlobalDiscount: (discount: { type: 'percentage' | 'amount'; value: number }) => void;
  resetState: () => void;
}

const getInitialState = (): Omit<TreatmentPlanState, 'setCurrency' | 'importDiagnosis' | 'addBudgetItem' | 'updateBudgetItem' | 'removeBudgetItem' | 'applyGlobalDiscount' | 'resetState'> => ({
  diagnosis: [],
  budgetItems: [
      { id: '1', treatment: 'Resina Compuesta en molar 26', quantity: 1, unitPrice: 1500, discount: { type: 'percentage', value: 0 }, total: 1500 },
      { id: '2', treatment: 'Limpieza Dental Profunda', quantity: 1, unitPrice: 1200, discount: { type: 'percentage', value: 10 }, total: 1080 },
      { id: '3', treatment: 'Blanqueamiento Dental', quantity: 1, unitPrice: 4500, discount: { type: 'amount', value: 500 }, total: 4000 },
  ],
  currency: 'MXN',
  globalDiscount: { type: 'percentage', value: 0 },
});

export const useTreatmentPlanStore = create<TreatmentPlanState>()(
  devtools(
    persist(
      (set) => ({
        ...getInitialState(),
        setCurrency: (currency) => set({ currency }),
        importDiagnosis: (jsonString: string) => {
          try {
            const parsedData = JSON.parse(jsonString);
            if (parsedData.type !== 'diagnosis' || !Array.isArray(parsedData.data)) {
              console.error("Invalid diagnosis JSON format.");
              return false;
            }
            const descriptions: string[] = parsedData.data
              .map((item: DiagnosisData) => item.description)
              .filter((desc: string | undefined): desc is string => !!desc);
            set({ diagnosis: descriptions });
            // Here you could also auto-populate budgetItems based on diagnosis
            return true;
          } catch (e) {
            console.error('Failed to parse or process diagnosis JSON', e);
            return false;
          }
        },
        addBudgetItem: () => { console.log('addBudgetItem not implemented'); },
        updateBudgetItem: () => { console.log('updateBudgetItem not implemented'); },
        removeBudgetItem: () => { console.log('removeBudgetItem not implemented'); },
        applyGlobalDiscount: () => { console.log('applyGlobalDiscount not implemented'); },
        resetState: () => set(getInitialState()),
      }),
      {
        name: 'treatment-plan-storage',
      }
    )
  )
);
