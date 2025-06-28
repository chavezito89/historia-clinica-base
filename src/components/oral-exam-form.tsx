'use client';

import { useOralExamStore } from '@/store/oral-exam-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import type { ChangeEvent } from 'react';
import type { OralExamSlice, OralExamState } from '@/store/oral-exam-store';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface FormRadioGroupProps {
  section: OralExamSlice;
  field: keyof OralExamState[OralExamSlice];
  label: string;
  options: string[];
}

const FormRadioGroup = ({ section, field, label, options }: FormRadioGroupProps) => {
  const { data, setField } = useOralExamStore((state) => ({
    data: state[section],
    setField: state.setField,
  }));

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <RadioGroup
        value={(data as any)[field] || ''}
        onValueChange={(value) => setField(section, field as string, value)}
        className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1"
      >
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${section}-${String(field)}-${option}`} />
            <Label htmlFor={`${section}-${String(field)}-${option}`} className="font-normal">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

interface FormTextAreaProps {
  section: OralExamSlice;
  field: keyof OralExamState[OralExamSlice];
  label: string;
  placeholder: string;
}

const FormTextArea = ({ section, field, label, placeholder }: FormTextAreaProps) => {
    const { value, setField } = useOralExamStore((state) => ({
        value: (state[section] as any)[field] || '',
        setField: state.setField,
    }));

    return (
        <div className="space-y-2">
            <Label htmlFor={`${section}-${String(field)}`}>{label}</Label>
            <Textarea
                id={`${section}-${String(field)}`}
                placeholder={placeholder}
                rows={3}
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setField(section, field as string, e.target.value)}
            />
        </div>
    );
};


export function OralExamForm() {
    const { dentalDiagnosis } = useOralExamStore();

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>1. Exploración Extraoral</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <FormRadioGroup section="extraoral" field="simetriaFacial" label="Simetría facial" options={['Normal', 'Anormal']} />
                    <FormRadioGroup section="extraoral" field="ganglios" label="Ganglios" options={['Palpables', 'No palpables']} />
                    <FormRadioGroup section="extraoral" field="mandibula" label="Mandíbula" options={['Sin alteraciones', 'Desviación', 'Dolor']} />
                    <FormRadioGroup section="extraoral" field="atm" label="ATM (Articulación Temporomandibular)" options={['Normal', 'Dolor', 'Chasquido', 'Limitación']} />
                    <div className="md:col-span-2">
                        <FormTextArea section="extraoral" field="otrosHallazgos" label="Otros hallazgos" placeholder="Describa otros hallazgos relevantes..." />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>2. Exploración Intraoral</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="font-medium text-foreground mb-4">Tejidos blandos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <FormRadioGroup section="intraoral" field="labios" label="Labios" options={['Sin alteraciones', 'Heridas', 'Lesiones']} />
                            <FormRadioGroup section="intraoral" field="carrillos" label="Carrillos" options={['Sin alteraciones', 'Aftas', 'Lesiones']} />
                            <FormRadioGroup section="intraoral" field="lengua" label="Lengua" options={['Normal', 'Saburra', 'Úlceras', 'Fisuras']} />
                            <FormRadioGroup section="intraoral" field="pisoDeBoca" label="Piso de boca" options={['Normal', 'Inflamación', 'Masas']} />
                            <FormRadioGroup section="intraoral" field="encias" label="Encías" options={['Normal', 'Gingivitis', 'Retracción', 'Hiperplasia']} />
                        </div>
                    </div>
                     <div>
                        <h3 className="font-medium text-foreground mb-4">Tejidos duros</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                             <FormRadioGroup section="intraoral" field="paladar" label="Paladar" options={['Normal', 'Fisura', 'Mancha']} />
                             <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                <FormTextArea section="intraoral" field="maxilarSuperior" label="Maxilar superior" placeholder="Observaciones..." />
                                <FormTextArea section="intraoral" field="maxilarInferior" label="Maxilar inferior" placeholder="Observaciones..." />
                             </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>3. Higiene Bucal</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <FormRadioGroup section="higiene" field="indiceDePlaca" label="Índice de placa" options={['Bajo', 'Medio', 'Alto']} />
                    <FormRadioGroup section="higiene" field="halitosis" label="Halitosis" options={['Sí', 'No']} />
                     <div className="md:col-span-2">
                        <FormTextArea section="higiene" field="recomendaciones" label="Recomendaciones" placeholder="Recomendaciones de higiene para el paciente..." />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>4. Estado Dental General</CardTitle>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <FileText className="mr-2 h-4 w-4" />
                                Abrir Odontograma
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-7xl h-[90vh] flex flex-col">
                            <DialogHeader>
                                <DialogTitle>Odontograma Interactivo</DialogTitle>
                            </DialogHeader>
                            <div className="flex-grow">
                                <iframe 
                                    src="https://preview--dental-chart-pwa-app.lovable.app/"
                                    className="w-full h-full border-0 rounded-md"
                                    title="Odontograma Interactivo"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    {dentalDiagnosis.length > 0 ? (
                        <ul className="space-y-2 list-disc list-inside text-sm text-foreground">
                            {dentalDiagnosis.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-muted-foreground">Importe un archivo de diagnóstico JSON para ver el estado dental.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
