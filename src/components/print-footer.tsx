'use client';

import { useClinicalHistoryStore } from '@/store/clinical-history-store';

export function PrintFooter() {
  const { patientId } = useClinicalHistoryStore();

  return (
    <footer className="border-t-2 border-black pt-4 mt-8 text-xs">
      <div className="flex justify-between items-center">
        <p>Número de expediente: <span className="font-bold">{patientId}</span></p>
        <p className="font-bold">Dottoo Solutions México</p>
      </div>
    </footer>
  );
}
