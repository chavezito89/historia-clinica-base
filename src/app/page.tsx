'use client';

import { PatientForm } from '@/components/patient-form';
import { MedicalHistoryForm } from '@/components/medical-history-form';
import { ChiefComplaintForm } from '@/components/chief-complaint-form';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { PrintHeader } from '@/components/print-header';
import { PrintFooter } from '@/components/print-footer';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { useEffect } from 'react';
import { Logo } from '@/components/icons/logo';
import { Card } from '@/components/ui/card';

export default function Home() {
  const { patientId, generatePatientId } = useClinicalHistoryStore();

  useEffect(() => {
    if (!patientId) {
      generatePatientId();
    }
  }, [patientId, generatePatientId]);

  const handlePrint = () => {
    window.print();
  };

  const PageContent = () => (
    <div className="space-y-6">
      <PatientForm />
      <MedicalHistoryForm />
      <ChiefComplaintForm />
    </div>
  );

  return (
    <>
      <div className="print:hidden bg-secondary/30 min-h-screen">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold font-headline text-foreground">
                Dental History Pro
              </h1>
            </div>
            <Button onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Export to PDF
            </Button>
          </div>
        </header>
        <main className="container mx-auto p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <PageContent />
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
