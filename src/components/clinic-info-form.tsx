'use client';

import { useRef } from 'react';
import { useClinicStore } from '@/store/clinic-store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { Upload, Trash2 } from 'lucide-react';

export function ClinicInfoForm() {
  const { clinicInfo, updateClinicInfo } = useClinicStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateClinicInfo({ [name]: value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateClinicInfo({ logo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    updateClinicInfo({ logo: '' });
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
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
            <Label>Logo de la Clínica</Label>
            <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-md border flex items-center justify-center bg-muted/50 overflow-hidden">
                    {clinicInfo.logo ? (
                        <img src={clinicInfo.logo} alt="Logo de la clínica" className="h-full w-full object-contain" />
                    ) : (
                        <span className="text-xs text-muted-foreground text-center">Sin logo</span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                     <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                        <Upload className="mr-2 h-4 w-4" />
                        Subir logo
                    </Button>
                    {clinicInfo.logo && (
                        <Button variant="destructive" size="sm" onClick={handleRemoveLogo}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Quitar logo
                        </Button>
                    )}
                </div>
            </div>
            <Input 
                type="file" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleLogoUpload} 
                accept="image/png, image/jpeg, image/svg+xml"
            />
             <p className="text-xs text-muted-foreground">Sugerencia: Sube una imagen cuadrada para mejores resultados.</p>
        </div>
        
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
