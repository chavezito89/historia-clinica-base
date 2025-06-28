import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface PriceItem {
  id: string;
  name: string;
  price: number;
  currency: 'MXN' | 'USD';
  costPerFace: boolean;
}

export interface PricingState {
  priceList: PriceItem[];
  addPriceItem: (item: Omit<PriceItem, 'id'>) => void;
  updatePriceItem: (id: string, updates: Partial<Omit<PriceItem, 'id'>>) => void;
  removePriceItem: (id: string) => void;
  resetState: () => void;
}

const getInitialState = (): Pick<PricingState, 'priceList'> => ({
  priceList: [],
});

export const usePricingStore = create<PricingState>()(
  devtools(
    persist(
      (set) => ({
        ...getInitialState(),
        addPriceItem: (item) => {
          set((state) => ({
            priceList: [...state.priceList, { ...item, id: new Date().getTime().toString() }],
          }));
        },
        updatePriceItem: (id, updates) => {
          set((state) => ({
            priceList: state.priceList.map((item) =>
              item.id === id ? { ...item, ...updates } : item
            ),
          }));
        },
        removePriceItem: (id) => {
          set((state) => ({
            priceList: state.priceList.filter((item) => item.id !== id),
          }));
        },
        resetState: () => set(getInitialState()),
      }),
      {
        name: 'pricing-storage',
      }
    )
  )
);
