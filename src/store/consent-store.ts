import { create } from 'zustand';

interface ConsentState {
    patientSignature: string;
    termsAccepted: boolean;
    isFinalized: boolean;
    setPatientSignature: (signature: string) => void;
    setTermsAccepted: (accepted: boolean) => void;
    finalizeConsent: () => void;
    resetConsentState: () => void;
}

const initialState = {
    patientSignature: '',
    termsAccepted: false,
    isFinalized: false,
};

export const useConsentStore = create<ConsentState>((set) => ({
    ...initialState,
    setPatientSignature: (signature) => set({ patientSignature: signature }),
    setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),
    finalizeConsent: () => set({ isFinalized: true }),
    resetConsentState: () => set(initialState),
}));
