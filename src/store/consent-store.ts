import { create } from 'zustand';

interface ConsentState {
    patientSignature: string;
    termsAccepted: boolean;
    setPatientSignature: (signature: string) => void;
    setTermsAccepted: (accepted: boolean) => void;
    resetConsentState: () => void;
}

const initialState = {
    patientSignature: '',
    termsAccepted: false,
};

export const useConsentStore = create<ConsentState>((set) => ({
    ...initialState,
    setPatientSignature: (signature) => set({ patientSignature: signature }),
    setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),
    resetConsentState: () => set(initialState),
}));
