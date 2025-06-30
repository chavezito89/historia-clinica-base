'use client';

import { useConsentStore } from '@/store/consent-store';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { SignaturePad } from './signature-pad';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useClinicStore } from '@/store/clinic-store';
import { Separator } from './ui/separator';

export function ConsentFormFooter() {
    const { 
        hasAcknowledged,
        setHasAcknowledged,
        patientSignature,
        setPatientSignature,
        consentDecision,
        setConsentDecision,
        isFinalized,
    } = useConsentStore();
    
    const { patientData } = useClinicalHistoryStore();
    const { doctorInfo, updateDoctorInfo } = useClinicStore();

    const handleDecisionChange = (decision: 'accepted' | 'rejected') => {
        if (isFinalized || !hasAcknowledged) return;
        
        if (consentDecision === decision) {
            setConsentDecision(null);
        } else {
            setConsentDecision(decision);
        }
    };

    const isDecisionDisabled = isFinalized || !hasAcknowledged;

    return (
        <footer className="space-y-8 mt-8 print:mt-16">
            <div className="space-y-6 print:hidden">
                <div className="flex items-start space-x-3">
                    <Checkbox
                        id="terms-acknowledged"
                        checked={hasAcknowledged}
                        onCheckedChange={(checked) => setHasAcknowledged(Boolean(checked))}
                        disabled={isFinalized}
                    />
                    <Label htmlFor="terms-acknowledged" className="cursor-pointer text-sm font-normal">
                        He leído y comprendido la información, los riesgos y los beneficios descritos en este documento.
                    </Label>
                </div>

                <Separator />
                
                <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">Una vez leído el documento, por favor seleccione una opción:</p>
                    <div className="flex items-start space-x-3">
                        <Checkbox
                            id="consent-accepted"
                            checked={consentDecision === 'accepted'}
                            onCheckedChange={() => handleDecisionChange('accepted')}
                            disabled={isDecisionDisabled}
                        />
                        <Label htmlFor="consent-accepted" className={`cursor-pointer text-sm font-normal ${isDecisionDisabled ? 'text-muted-foreground' : ''}`}>
                            Doy mi consentimiento para el tratamiento propuesto.
                        </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                        <Checkbox
                            id="consent-rejected"
                            checked={consentDecision === 'rejected'}
                            onCheckedChange={() => handleDecisionChange('rejected')}
                            disabled={isDecisionDisabled}
                        />
                        <Label htmlFor="consent-rejected" className={`cursor-pointer text-sm font-normal ${isDecisionDisabled ? 'text-muted-foreground' : ''}`}>
                            NO otorgo mi consentimiento para el tratamiento propuesto.
                        </Label>
                    </div>
                </div>
            </div>

            <div className="hidden print:block space-y-4 text-sm">
                 {hasAcknowledged && <p><strong>Declaración:</strong> He leído y comprendido la información, los riesgos y los beneficios descritos en este documento.</p>}
                {consentDecision === 'accepted' && (
                    <p><strong>Decisión:</strong> <strong>Doy mi consentimiento</strong> para el tratamiento propuesto.</p>
                )}
                {consentDecision === 'rejected' && (
                    <p><strong>Decisión:</strong> <strong>NO otorgo mi consentimiento</strong> para el tratamiento propuesto.</p>
                )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <SignaturePad 
                    label={patientData.tutor ? `Firma del Tutor: ${patientData.tutor || ''}` : `Firma del Paciente: ${patientData.fullName || ''}`}
                    signature={patientSignature}
                    onSave={(sig) => setPatientSignature(sig)}
                    onClear={() => setPatientSignature('')}
                    disabled={isFinalized || !hasAcknowledged}
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
