import { create } from 'zustand';

interface ConsentState {
    patientSignature: string;
    consentDecision: 'accepted' | 'rejected' | null;
    isFinalized: boolean;
    setPatientSignature: (signature: string) => void;
    setConsentDecision: (decision: 'accepted' | 'rejected' | null) => void;
    finalizeConsent: () => void;
    resetConsentState: () => void;
}

const initialState = {
    patientSignature: '',
    consentDecision: null,
    isFinalized: false,
};

export const useConsentStore = create<ConsentState>((set) => ({
    ...initialState,
    setPatientSignature: (signature) => set({ patientSignature: signature }),
    setConsentDecision: (decision) => set({ consentDecision: decision }),
    finalizeConsent: () => set({ isFinalized: true }),
    resetConsentState: () => set(initialState),
}));
