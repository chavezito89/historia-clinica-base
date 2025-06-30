'use client';

import { useEffect, useState } from 'react';
import { useClinicStore } from '@/store/clinic-store';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Logo } from './icons/logo';
import { Card, CardContent } from './ui/card';

export function ConsentFormHeader() {
    const { patientId, patientData } = useClinicalHistoryStore();
    const { clinicInfo, doctorInfo } = useClinicStore();
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: es }));
    }, []);

    const dobFormatted = patientData.dob ? format(new Date(patientData.dob), 'dd/MM/yyyy', { locale: es }) : 'N/A';
    const ageDisplay = patientData.age ? `${patientData.age} años` : '';

    return (
        <header className="space-y-6 print:mb-8">
            <div className="flex justify-between items-start border-b pb-4">
                <div className="flex items-center gap-4">
                    {clinicInfo.logo ? (
                        <img src={clinicInfo.logo} alt="Logo de la clínica" className="h-20 w-20 object-contain" />
                    ) : (
                        <Logo className="h-20 w-20 text-foreground" />
                    )}
                    <div>
                        <h1 className="text-xl font-bold">{clinicInfo.name}</h1>
                        <p className="text-sm text-muted-foreground">{clinicInfo.address}</p>
                        <p className="text-sm text-muted-foreground">Tel: {clinicInfo.phone} | Email: {clinicInfo.email}</p>
                    </div>
                </div>
                <div className="text-right flex-shrink-0">
                    <h2 className="text-2xl font-bold text-primary">Consentimiento Informado</h2>
                    <p className="text-sm font-medium">Fecha: {currentDate}</p>
                </div>
            </div>

            <Card className="bg-muted/50 print:bg-transparent print:shadow-none print:border-none">
                <CardContent className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                    <div>
                        <p className="font-semibold text-foreground">Paciente</p>
                        <p className="text-muted-foreground">{patientData.fullName || 'No especificado'}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">Fecha de Nacimiento</p>
                        <p className="text-muted-foreground">{dobFormatted}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">Edad</p>
                        <p className="text-muted-foreground">{ageDisplay || 'No especificada'}</p>
                    </div>
                     <div>
                        <p className="font-semibold text-foreground">Expediente No.</p>
                        <p className="text-muted-foreground">{patientId || 'No especificado'}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">Odontólogo Tratante</p>
                        <p className="text-muted-foreground">{doctorInfo.name || 'No especificado'}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">Cédula Profesional</p>
                        <p className="text-muted-foreground">{doctorInfo.professionalLicense || 'No especificada'}</p>
                    </div>
                </CardContent>
            </Card>
        </header>
    );
}
