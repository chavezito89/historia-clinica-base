'use client';

import { useClinicStore } from '@/store/clinic-store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ClinicInfoForm() {
  const { clinicInfo, updateClinicInfo } = useClinicStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateClinicInfo({ [name]: value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de la Clínica</CardTitle>
        <CardDescription>
            Estos datos aparecerán en los encabezados de los documentos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="clinic-name">Nombre del establecimiento</Label>
          <Input
            id="clinic-name"
            name="name"
            value={clinicInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clinic-address">Dirección</Label>
          <Input
            id="clinic-address"
            name="address"
            value={clinicInfo.address}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <Label htmlFor="clinic-phone">Teléfono</Label>
            <Input
                id="clinic-phone"
                name="phone"
                value={clinicInfo.phone}
                onChange={handleChange}
            />
            </div>
            <div className="space-y-2">
            <Label htmlFor="clinic-email">Email</Label>
            <Input
                id="clinic-email"
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
