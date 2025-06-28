import { create } from 'zustand';

interface UiState {
  isPricesModalOpen: boolean;
  togglePricesModal: (isOpen?: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isPricesModalOpen: false,
  togglePricesModal: (isOpen) => set((state) => ({ isPricesModalOpen: isOpen ?? !state.isPricesModalOpen })),
}));
