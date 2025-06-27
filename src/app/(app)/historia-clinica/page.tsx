'use client';

import { PatientForm } from '@/components/patient-form';
import { MedicalHistoryForm } from '@/components/medical-history-form';
import { ChiefComplaintForm } from '@/components/chief-complaint-form';
import { SignatureForm } from '@/components/signature-form';
import { Button } from '@/components/ui/button';
import { Printer, FileJson, Upload, RotateCcw } from 'lucide-react';
import { PrintHeader } from '@/components/print-header';
import { PrintFooter } from '@/components/print-footer';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { useEffect, useCallback, useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
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
    patientData, 
    medicalHistory, 
    chiefComplaint,
    resetState,
    importState 
  } = useClinicalHistoryStore();

  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

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

  const handleImportClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const text = e.target?.result;
            if (typeof text === 'string') {
                const importedData = JSON.parse(text);
                const success = importState(importedData);
                if (success) {
                  toast({
                    title: "Importación exitosa",
                    description: "La historia clínica se ha cargado correctamente.",
                  });
                } else {
                  throw new Error("El archivo JSON no es válido o está corrupto.");
                }
            }
        } catch (error: any) {
            console.error("Error processing JSON file:", error);
            toast({
              variant: "destructive",
              title: "Error de importación",
              description: error.message || "No se pudo procesar el archivo.",
            });
        }
    };
    reader.onerror = () => {
        toast({
          variant: "destructive",
          title: "Error de lectura",
          description: "No se pudo leer el archivo seleccionado.",
        });
    }
    reader.readAsText(file);
    event.target.value = '';
  }, [importState, toast]);

  const handleReset = useCallback(() => {
    resetState();
    setIsResetDialogOpen(false);
    toast({
        title: "Formulario reseteado",
        description: "Se ha iniciado una nueva historia clínica.",
    });
  }, [resetState, toast]);

  return (
    <>
      <div className='print:hidden'>
        <PageHeader title="Historia Clínica">
          <Button variant="outline" size="sm" onClick={handleImportClick} className="gap-1.5">
            <Upload className="h-4 w-4" />
            <span className="hidden sm:inline">Importar</span>
          </Button>
          <Button variant="outline" size="sm" onClick={handleExportJson} className="gap-1.5">
            <FileJson className="h-4 w-4" />
            <span className="hidden sm:inline">Exportar</span>
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint} className="gap-1.5">
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">PDF</span>
          </Button>
          <Button variant="outline" size="sm" onClick={() => setIsResetDialogOpen(true)} className="gap-1.5">
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Resetear</span>
          </Button>
        </PageHeader>
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

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".json"
        onChange={handleFileChange}
      />

      <div className="hidden print:block font-body text-black print-container">
        <PrintHeader />
        <main className="mt-8">
          <PageContent />
        </main>
        <PrintFooter />
      </div>

      <AlertDialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás realmente seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción es irreversible y borrará todos los datos del formulario actual. Se creará una nueva historia clínica en blanco.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleReset}>Sí, Resetear</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
