'use client';

import { useConsentStore } from '@/store/consent-store';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { SignaturePad } from './signature-pad';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { clinicInfo } from '@/config/clinic';

export function ConsentFormFooter() {
    const { 
        doctorSignature, setDoctorSignature,
        termsAccepted, setTermsAccepted,
    } = useConsentStore();
    
    const { patientData, setPatientData } = useClinicalHistoryStore();

    return (
        <footer className="space-y-8 mt-8 print:mt-16">
            <div className="flex items-center space-x-2 print:hidden">
                <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                />
                <Label htmlFor="terms" className="cursor-pointer">
                    He leído y comprendido los términos y condiciones.
                </Label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <SignaturePad 
                    label={patientData.tutor ? `Firma del Tutor: ${patientData.tutor || ''}` : `Firma del Paciente: ${patientData.fullName || ''}`}
                    signature={patientData.signature}
                    onSave={(sig) => setPatientData('signature', sig)}
                    onClear={() => setPatientData('signature', '')}
                    disabled={!termsAccepted}
                />
                <SignaturePad 
                    label={`Firma del Odontólogo: ${clinicInfo.name}`}
                    signature={doctorSignature}
                    onSave={(sig) => setDoctorSignature(sig)}
                    onClear={() => setDoctorSignature('')}
                    disabled={!termsAccepted}
                />
            </div>
        </footer>
    );
}
