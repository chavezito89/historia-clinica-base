'use client';

import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ChiefComplaintForm() {
  const { chiefComplaint, setChiefComplaint } = useClinicalHistoryStore();

  return (
    <Card className="print:print-card">
      <CardHeader>
        <CardTitle className="font-headline">Motivo de Consulta</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content">
        <div className="space-y-2">
          <Label htmlFor="chief-complaint" className="sr-only">Motivo de Consulta</Label>
          <Textarea
            id="chief-complaint"
            placeholder="Describa el motivo principal de la visita del paciente..."
            rows={5}
            value={chiefComplaint ?? ''}
            onChange={(e) => setChiefComplaint(e.target.value)}
            className="print:print-textarea"
          />
        </div>
      </CardContent>
    </Card>
  );
}
