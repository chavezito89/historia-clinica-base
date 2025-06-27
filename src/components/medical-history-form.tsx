'use client';

import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function MedicalHistoryForm() {
  const { medicalHistory, setMedicalHistory } = useClinicalHistoryStore();

  return (
    <Card className="print:print-card">
      <CardHeader>
        <CardTitle className="font-headline">Antecedentes Médicos</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">Condición</TableHead>
              <TableHead className="text-center">Sí</TableHead>
              <TableHead className="text-center">No</TableHead>
              <TableHead>Especificar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicalHistory.map((condition, index) => (
              <TableRow key={condition.name}>
                <TableCell className="font-medium">{condition.name}</TableCell>
                <TableCell className="text-center">
                  <RadioGroup
                    value={condition.hasCondition || ''}
                    onValueChange={(val) => setMedicalHistory(index, 'hasCondition', val as 'Sí' | 'No')}
                  >
                    <RadioGroupItem value="Sí" />
                  </RadioGroup>
                </TableCell>
                <TableCell className="text-center">
                  <RadioGroup
                    value={condition.hasCondition || ''}
                    onValueChange={(val) => setMedicalHistory(index, 'hasCondition', val as 'Sí' | 'No')}
                  >
                    <RadioGroupItem value="No" />
                  </RadioGroup>
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Detalles..."
                    value={condition.details}
                    onChange={(e) => setMedicalHistory(index, 'details', e.target.value)}
                    disabled={condition.hasCondition !== 'Sí'}
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
