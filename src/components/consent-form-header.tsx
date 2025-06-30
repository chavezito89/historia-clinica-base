'use client';

import { useEffect, useState } from 'react';
import { useClinicStore } from '@/store/clinic-store';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function ConsentFormHeader() {
    const { patientId, patientData } = useClinicalHistoryStore();
    const { clinicInfo, doctorInfo } = useClinicStore();
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: es }));
    }, []);

    const dobFormatted = patientData.dob ? format(new Date(patientData.dob), 'PPP', { locale: es }) : 'N/A';
    const ageDisplay = patientData.age ? ` (${patientData.age} años)` : '';

    return (
        <header className="space-y-4 print:mb-8">
            <div className="text-center">
                <h2 className="text-lg font-bold">Consentimiento Informado</h2>
            </div>
            <table className="w-full text-sm border-collapse border">
                <tbody>
                    <tr className="border-b">
                        <td className="font-semibold p-2 w-1/3 border-r">Nombre del paciente:</td>
                        <td className="p-2">{patientData.fullName || ''}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold p-2 border-r">Fecha de nacimiento y edad:</td>
                        <td className="p-2">{`${dobFormatted}${ageDisplay}`}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold p-2 border-r">Número de expediente clínico:</td>
                        <td className="p-2">{patientId || ''}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold p-2 border-r">Cédula del odontólogo:</td>
                        <td className="p-2">{doctorInfo.professionalLicense}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-semibold p-2 border-r">Dirección y teléfono de la clínica:</td>
                        <td className="p-2">{`${clinicInfo.address} | Tel: ${clinicInfo.phone}`}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold p-2 border-r">Fecha actual:</td>
                        <td className="p-2">{currentDate}</td>
                    </tr>
                </tbody>
            </table>
        </header>
    );
}
