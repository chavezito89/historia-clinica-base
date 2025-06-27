'use client';

import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function MedicalHistoryForm() {
  const { medicalHistory, setMedicalHistory, isFinalized } = useClinicalHistoryStore();

  return (
    <Card className="print:print-card">
      <CardHeader>
        <CardTitle className="font-headline">Antecedentes Médicos</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Condición</TableHead>
              <TableHead className="w-[20%] text-center">Respuesta</TableHead>
              <TableHead>Especificar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicalHistory.map((condition, index) => (
              <TableRow key={condition.name}>
                <TableCell className="font-medium">{condition.name}</TableCell>
                <TableCell>
                  <RadioGroup
                    value={condition.hasCondition ?? ''}
                    onValueChange={(val) => setMedicalHistory(index, 'hasCondition', val as 'Sí' | 'No')}
                    className="flex justify-center items-center gap-4 print:print-radio-group"
                    disabled={isFinalized}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Sí" id={`${condition.name}-yes-${index}`} />
                      <Label htmlFor={`${condition.name}-yes-${index}`}>Sí</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="No" id={`${condition.name}-no-${index}`} />
                      <Label htmlFor={`${condition.name}-no-${index}`}>No</Label>
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Detalles..."
                    value={condition.details ?? ''}
                    onChange={(e) => setMedicalHistory(index, 'details', e.target.value)}
                    disabled={isFinalized || condition.hasCondition !== 'Sí'}
                    className="print:print-input"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
