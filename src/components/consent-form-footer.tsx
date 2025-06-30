'use client';

import { useConsentStore } from '@/store/consent-store';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { SignaturePad } from './signature-pad';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useClinicStore } from '@/store/clinic-store';

export function ConsentFormFooter() {
    const { 
        patientSignature,
        setPatientSignature,
        consentDecision,
        setConsentDecision,
        isFinalized,
    } = useConsentStore();
    
    const { patientData } = useClinicalHistoryStore();
    const { doctorInfo, updateDoctorInfo } = useClinicStore();

    const handleDecisionChange = (decision: 'accepted' | 'rejected') => {
        if (isFinalized) return;
        
        // If clicking the same checkbox, uncheck it (set to null).
        // Otherwise, set the new decision, making them mutually exclusive.
        if (consentDecision === decision) {
            setConsentDecision(null);
        } else {
            setConsentDecision(decision);
        }
    };

    return (
        <footer className="space-y-8 mt-8 print:mt-16">
            <div className="space-y-4 print:hidden">
                <div className="flex items-start space-x-3">
                    <Checkbox
                        id="consent-accepted"
                        checked={consentDecision === 'accepted'}
                        onCheckedChange={() => handleDecisionChange('accepted')}
                        disabled={isFinalized}
                    />
                    <Label htmlFor="consent-accepted" className="cursor-pointer text-sm font-normal">
                        He leído todo el documento y doy mi consentimiento para el tratamiento propuesto.
                    </Label>
                </div>
                <div className="flex items-start space-x-3">
                    <Checkbox
                        id="consent-rejected"
                        checked={consentDecision === 'rejected'}
                        onCheckedChange={() => handleDecisionChange('rejected')}
                        disabled={isFinalized}
                    />
                    <Label htmlFor="consent-rejected" className="cursor-pointer text-sm font-normal">
                        Marcar solo en caso de no aceptar el tratamiento propuesto. No otorgo mi consentimiento para que se lleve a cabo el tratamiento descrito en el presente documento aun cuando fui informado de los riesgos y las posibles consecuencias que pueden causar a mi salud el hecho de que no se practique el tratamiento propuesto por el Odontólogo.
                    </Label>
                </div>
            </div>

            <div className="hidden print:block space-y-4 text-sm">
                {consentDecision === 'accepted' && (
                    <p><strong>Decisión:</strong> He leído todo el documento y <strong>doy mi consentimiento</strong> para el tratamiento propuesto.</p>
                )}
                {consentDecision === 'rejected' && (
                    <p><strong>Decisión:</strong> He leído todo el documento y <strong>NO otorgo mi consentimiento</strong> para el tratamiento propuesto.</p>
                )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <SignaturePad 
                    label={patientData.tutor ? `Firma del Tutor: ${patientData.tutor || ''}` : `Firma del Paciente: ${patientData.fullName || ''}`}
                    signature={patientSignature}
                    onSave={(sig) => setPatientSignature(sig)}
                    onClear={() => setPatientSignature('')}
                    disabled={isFinalized}
                />
                <SignaturePad 
                    label={`Firma del Odontólogo: ${doctorInfo.name}`}
                    signature={doctorInfo.signature}
                    onSave={(sig) => updateDoctorInfo({ signature: sig })}
                    onClear={() => updateDoctorInfo({ signature: '' })}
                    disabled={isFinalized}
                />
            </div>
        </footer>
    );
}
