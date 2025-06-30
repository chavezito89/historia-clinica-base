import { create } from 'zustand';

interface ConsentState {
    hasAcknowledged: boolean;
    patientSignature: string;
    consentDecision: 'accepted' | 'rejected' | null;
    isFinalized: boolean;
    setHasAcknowledged: (acknowledged: boolean) => void;
    setPatientSignature: (signature: string) => void;
    setConsentDecision: (decision: 'accepted' | 'rejected' | null) => void;
    finalizeConsent: () => void;
    resetConsentState: () => void;
}

const initialState = {
    hasAcknowledged: false,
    patientSignature: '',
    consentDecision: null,
    isFinalized: false,
};

export const useConsentStore = create<ConsentState>((set) => ({
    ...initialState,
    setHasAcknowledged: (acknowledged) => set({ hasAcknowledged: acknowledged }),
    setPatientSignature: (signature) => set({ patientSignature: signature }),
    setConsentDecision: (decision) => set({ consentDecision: decision }),
    finalizeConsent: () => set({ isFinalized: true }),
    resetConsentState: () => set(initialState),
}));
