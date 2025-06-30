'use client';

import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SignaturePad } from './signature-pad';

export function SignatureForm() {
  const { patientData, setPatientData, isFinalized } = useClinicalHistoryStore();

  const getSignatureLabel = () => {
    if (patientData.tutor) return `Firma del Tutor: ${patientData.tutor}`;
    if (patientData.fullName) return `Firma del Paciente: ${patientData.fullName}`;
    return 'Firma del Paciente o Tutor';
  }

  return (
    <Card className="print:print-card print:border-none print:shadow-none">
      <CardHeader className="print:hidden">
        <CardTitle className="font-headline">Firma del Paciente o Tutor</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content">
        <SignaturePad
          label={getSignatureLabel()}
          signature={patientData.signature}
          onSave={(sig) => setPatientData('signature', sig)}
          onClear={() => setPatientData('signature', '')}
          disabled={isFinalized}
        />
      </CardContent>
    </Card>
  );
}
