'use client';

import { useClinicStore } from '@/store/clinic-store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignaturePad } from './signature-pad';

export function DoctorInfoForm() {
  const { doctorInfo, updateDoctorInfo } = useClinicStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateDoctorInfo({ [name]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información del Profesional</CardTitle>
        <CardDescription>
            Datos del odontólogo tratante que se usarán en los documentos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="doctor-name">Nombre</Label>
                <Input id="doctor-name" name="name" value={doctorInfo.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="doctor-license">Cédula Profesional</Label>
                <Input id="doctor-license" name="professionalLicense" value={doctorInfo.professionalLicense} onChange={handleChange} />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="doctor-university">Universidad</Label>
            <Input id="doctor-university" name="university" value={doctorInfo.university} onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label htmlFor="doctor-specialty">Especialidad (si aplica)</Label>
                <Input id="doctor-specialty" name="specialty" value={doctorInfo.specialty} onChange={handleChange} />
            </div>
             <div className="space-y-2">
                <Label htmlFor="doctor-specialty-university">Universidad de la especialidad</Label>
                <Input id="doctor-specialty-university" name="specialtyUniversity" value={doctorInfo.specialtyUniversity} onChange={handleChange} />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="doctor-phone">Teléfono</Label>
                <Input id="doctor-phone" name="phone" value={doctorInfo.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="doctor-email">Email</Label>
                <Input id="doctor-email" name="email" type="email" value={doctorInfo.email} onChange={handleChange} />
            </div>
        </div>
         <div className="space-y-2">
            <Label>Firma del Profesional</Label>
             <SignaturePad 
                label={`Firma del Odontólogo: ${doctorInfo.name}`}
                signature={doctorInfo.signature}
                onSave={(sig) => updateDoctorInfo({ signature: sig })}
                onClear={() => updateDoctorInfo({ signature: '' })}
            />
        </div>
      </CardContent>
    </Card>
  );
}
