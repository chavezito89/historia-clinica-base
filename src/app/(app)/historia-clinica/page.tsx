'use client';

import { PatientForm } from '@/components/patient-form';
import { MedicalHistoryForm } from '@/components/medical-history-form';
import { ChiefComplaintForm } from '@/components/chief-complaint-form';
import { SignatureForm } from '@/components/signature-form';
import { Button } from '@/components/ui/button';
import { PrintHeader } from '@/components/print-header';
import { PrintFooter } from '@/components/print-footer';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { useEffect } from 'react';
import { PageHeader } from '@/components/page-header';

const PageContent = () => (
  <div className="space-y-6">
    <PatientForm />
    <MedicalHistoryForm />
    <ChiefComplaintForm />
    <SignatureForm />
  </div>
);

export default function HistoriaClinicaPage() {
  const { 
    patientId, 
    generatePatientId, 
    isFinalized, 
    finalizeHistory,
  } = useClinicalHistoryStore();

  useEffect(() => {
    if (!patientId) {
      generatePatientId();
    }
  }, [patientId, generatePatientId]);

  return (
    <>
      <div className='print:hidden'>
        <PageHeader title="Historia Clínica" />
        <main className="container mx-auto p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <PageContent />
              {!isFinalized && (
                <div className="flex justify-end pt-6 print:hidden">
                  <Button size="lg" onClick={finalizeHistory}>
                    Finalizar
                  </Button>
                </div>
              )}
            </div>
        </main>
      </div>

      <div className="hidden print:block font-body text-black print-container">
        <PrintHeader />
        <main className="mt-8">
          <PageContent />
        </main>
        <PrintFooter />
      </div>
    </>
  );
}
