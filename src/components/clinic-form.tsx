'use client';

import { useClinicStore } from '@/store/clinic-store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ClinicForm() {
  const { clinicInfo, updateClinicInfo } = useClinicStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateClinicInfo({ [name]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de la Clínica y del Profesional</CardTitle>
        <CardDescription>
            Estos datos se usarán para autocompletar encabezados en documentos como la historia clínica y los consentimientos informados.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre de la Clínica o Doctor(a)</Label>
          <Input
            id="name"
            name="name"
            value={clinicInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="professionalLicense">Cédula Profesional</Label>
          <Input
            id="professionalLicense"
            name="professionalLicense"
            value={clinicInfo.professionalLicense}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            name="address"
            value={clinicInfo.address}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
                id="phone"
                name="phone"
                value={clinicInfo.phone}
                onChange={handleChange}
            />
            </div>
            <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                name="email"
                type="email"
                value={clinicInfo.email}
                onChange={handleChange}
            />
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
