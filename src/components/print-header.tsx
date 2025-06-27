'use client';

import { useEffect, useState } from 'react';
import { clinicInfo } from '@/config/clinic';
import { Logo } from './icons/logo';

export function PrintHeader() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  return (
    <header className="border-b-2 border-black pb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo className="h-16 w-16 text-black" />
          <div>
            <h1 className="text-2xl font-bold">{clinicInfo.name}</h1>
            <p className="text-sm">{clinicInfo.address}</p>
            <p className="text-sm">Tel: {clinicInfo.phone} | Email: {clinicInfo.email}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold">FECHA DE ELABORACIÓN:</p>
          <p>{currentDate}</p>
        </div>
      </div>
    </header>
  );
}
