'use client';

import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eraser } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SignatureForm() {
  const { patientData, setPatientData, isFinalized } = useClinicalHistoryStore();
  const sigPadRef = useRef<SignatureCanvas | null>(null);

  const setSigPadRef = (ref: SignatureCanvas | null) => {
    sigPadRef.current = ref;
    if (ref && patientData.signature && ref.isEmpty()) {
      ref.fromDataURL(patientData.signature);
    }
  };

  const clearSignature = () => {
    sigPadRef.current?.clear();
    setPatientData('signature', '');
  };

  const saveSignature = () => {
    if (isFinalized || !sigPadRef.current) {
      return;
    }

    if (sigPadRef.current.isEmpty()) {
      setPatientData('signature', '');
      return;
    }
    const signatureImage = sigPadRef.current.toDataURL('image/png');
    if (signatureImage) {
      setPatientData('signature', signatureImage);
    }
  };

  return (
    <Card className="print:print-card print:border-none print:shadow-none">
      <CardHeader className="print:hidden">
        <CardTitle className="font-headline">Firma del Paciente o Tutor</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content">
        <div className="space-y-4">
          <div className="space-y-2 print:hidden">
            <Label htmlFor="signature-canvas">Firme en el siguiente recuadro</Label>
            <div
              className={cn(
                'relative w-full h-48 rounded-md border bg-background',
                isFinalized && 'pointer-events-none bg-muted opacity-70'
              )}
            >
              <SignatureCanvas
                ref={setSigPadRef}
                penColor="black"
                canvasProps={{
                  id: 'signature-canvas',
                  className: 'w-full h-full rounded-md',
                }}
                onEnd={saveSignature}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 print:hidden">
            {!isFinalized && (
              <Button variant="outline" onClick={clearSignature}>
                <Eraser className="mr-2 h-4 w-4" />
                Limpiar
              </Button>
            )}
          </div>
        </div>

        <div className="hidden print:block mt-16">
          <div className="w-2/3 mx-auto">
            <div className="border-t border-black pt-2 text-center">
              {patientData.signature ? (
                <img src={patientData.signature} alt="Firma" className="h-16 mx-auto" />
              ) : (
                <div className="h-16"></div>
              )}
              <p className="text-sm mt-2">{patientData.fullName || 'Firma del Paciente o Tutor'}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
