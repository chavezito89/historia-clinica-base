import { create } from 'zustand';

interface ConsentState {
    hasAcknowledged: boolean;
    consentDecision: 'accepted' | 'rejected' | null;
    isFinalized: boolean;
    setHasAcknowledged: (acknowledged: boolean) => void;
    setConsentDecision: (decision: 'accepted' | 'rejected' | null) => void;
    finalizeConsent: () => void;
    resetConsentState: () => void;
}

const initialState = {
    hasAcknowledged: false,
    consentDecision: null,
    isFinalized: false,
};

export const useConsentStore = create<ConsentState>((set) => ({
    ...initialState,
    setHasAcknowledged: (acknowledged) => set({ hasAcknowledged: acknowledged }),
    setConsentDecision: (decision) => set({ consentDecision: decision }),
    finalizeConsent: () => set({ isFinalized: true }),
    resetConsentState: () => set(initialState),
}));
