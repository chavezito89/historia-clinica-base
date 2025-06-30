import { create } from 'zustand';

interface ConsentState {
    doctorSignature: string;
    setDoctorSignature: (signature:string) => void;
    termsAccepted: boolean;
    setTermsAccepted: (accepted: boolean) => void;
    resetConsentState: () => void;
}

export const useConsentStore = create<ConsentState>((set) => ({
    doctorSignature: '',
    setDoctorSignature: (signature) => set({ doctorSignature: signature }),
    termsAccepted: false,
    setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),
    resetConsentState: () => set({ doctorSignature: '', termsAccepted: false }),
}));
