'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function PatientForm() {
  const { patientData, setPatientData } = useClinicalHistoryStore();

  return (
    <Card className="print:print-card">
      <CardHeader>
        <CardTitle className="font-headline">Datos de Identificación del Paciente</CardTitle>
      </CardHeader>
      <CardContent className="print:print-card-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="fullName">Nombre Completo</Label>
            <Input
              id="fullName"
              value={patientData.fullName ?? ''}
              onChange={(e) => setPatientData('fullName', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4">
             <div className="space-y-2">
              <Label htmlFor="age">Edad</Label>
              <Input
                id="age"
                type="number"
                value={patientData.age ?? ''}
                onChange={(e) => setPatientData('age', e.target.value)}
                className="print:print-input"
              />
            </div>
             <div className="space-y-2">
              <Label>Fecha de Nacimiento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal print:print-input',
                      !patientData.dob && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {patientData.dob ? format(new Date(patientData.dob), 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 print:hidden">
                  <Calendar
                    mode="single"
                    selected={patientData.dob ? new Date(patientData.dob) : undefined}
                    onSelect={(date) => setPatientData('dob', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Sexo</Label>
            <RadioGroup
              value={patientData.sex ?? ''}
              onValueChange={(value) => setPatientData('sex', value)}
              className="flex items-center space-x-4 pt-2 print:print-radio-group"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Femenino" id="female" />
                <Label htmlFor="female">Femenino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Masculino" id="male" />
                <Label htmlFor="male">Masculino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Otro" id="other" />
                <Label htmlFor="other">Otro</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="address">Domicilio</Label>
            <Input
              id="address"
              value={patientData.address ?? ''}
              onChange={(e) => setPatientData('address', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono de Contacto</Label>
            <Input
              id="phone"
              value={patientData.phone ?? ''}
              onChange={(e) => setPatientData('phone', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={patientData.email ?? ''}
              onChange={(e) => setPatientData('email', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="occupation">Ocupación</Label>
            <Input
              id="occupation"
              value={patientData.occupation ?? ''}
              onChange={(e) => setPatientData('occupation', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maritalStatus">Estado Civil</Label>
            <Input
              id="maritalStatus"
              value={patientData.maritalStatus ?? ''}
              onChange={(e) => setPatientData('maritalStatus', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="curp">CURP</Label>
            <Input
              id="curp"
              value={patientData.curp ?? ''}
              onChange={(e) => setPatientData('curp', e.target.value)}
              className="print:print-input"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="tutor">Nombre del Tutor / Responsable Legal (si aplica)</Label>
            <Input
              id="tutor"
              value={patientData.tutor ?? ''}
              onChange={(e) => setPatientData('tutor', e.target.value)}
              className="print:print-input"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
