import { create } from 'zustand';

interface ConsentState {
    termsAccepted: boolean;
    setTermsAccepted: (accepted: boolean) => void;
    resetConsentState: () => void;
}

export const useConsentStore = create<ConsentState>((set) => ({
    termsAccepted: false,
    setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),
    resetConsentState: () => set({ termsAccepted: false }),
}));
