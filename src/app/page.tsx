'use client';

import { PatientForm } from '@/components/patient-form';
import { MedicalHistoryForm } from '@/components/medical-history-form';
import { ChiefComplaintForm } from '@/components/chief-complaint-form';
import { SignatureForm } from '@/components/signature-form';
import { Button } from '@/components/ui/button';
import { Printer, FileJson } from 'lucide-react';
import { PrintHeader } from '@/components/print-header';
import { PrintFooter } from '@/components/print-footer';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { useEffect, useCallback } from 'react';
import { Logo } from '@/components/icons/logo';

const PageContent = () => (
  <div className="space-y-6">
    <PatientForm />
    <MedicalHistoryForm />
    <ChiefComplaintForm />
    <SignatureForm />
  </div>
);

export default function Home() {
  const { patientId, generatePatientId, isFinalized, finalizeHistory, patientData, medicalHistory, chiefComplaint } = useClinicalHistoryStore();

  useEffect(() => {
    if (!patientId) {
      generatePatientId();
    }
  }, [patientId, generatePatientId]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleExportJson = useCallback(() => {
    const stateToExport = {
      patientId,
      patientData,
      medicalHistory,
      chiefComplaint,
      isFinalized,
    };

    const dataStr = JSON.stringify(stateToExport, null, 2);
    const dataBlob = new Blob([dataStr], {type: "application/json"});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `clinical-history-${patientId || 'data'}.json`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [patientId, patientData, medicalHistory, chiefComplaint, isFinalized]);

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
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={handleExportJson}>
                <FileJson className="mr-2 h-4 w-4" />
                Export to JSON
              </Button>
              <Button onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Export to PDF
              </Button>
            </div>
          </div>
        </header>
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
