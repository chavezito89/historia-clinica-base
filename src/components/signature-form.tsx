'use client';

import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SignatureForm() {
  const { patientData, setPatientData } = useClinicalHistoryStore();

  return (
    <Card className="print:print-card print:border-none print:shadow-none">
      <CardHeader className="print:hidden">
        <CardTitle className="font-headline">Firma del Paciente o Tutor</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content">
        <div className="space-y-2 print:hidden">
          <Label htmlFor="signature">Firma (Escriba el nombre completo)</Label>
          <Input
            id="signature"
            placeholder="Escriba el nombre completo para firmar"
            value={patientData.signature}
            onChange={(e) => setPatientData('signature', e.target.value)}
            className="print:print-input"
          />
        </div>
        <div className="hidden print:block mt-16">
          <div className="w-2/3 mx-auto">
             <div className="border-t border-black pt-2 text-center">
                <p className="font-bold h-6">{patientData.signature}</p>
                <p className="text-sm">Firma del Paciente o Tutor</p>
             </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
