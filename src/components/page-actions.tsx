'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Upload, FileJson, Printer, RotateCcw, XCircle, Plus, Tags } from 'lucide-react';
import { useClinicalHistoryStore } from '@/store/clinical-history-store';
import { useOralExamStore } from '@/store/oral-exam-store';
import { useToast } from '@/hooks/use-toast';
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
import { SidebarGroup } from './ui/sidebar';
import { useUiStore } from '@/store/ui-store';

export function PageActions() {
    const pathname = usePathname();
    const { toast } = useToast();
    const { togglePricesModal } = useUiStore();

    // Refs for file inputs
    const clinicalHistoryInputRef = useRef<HTMLInputElement>(null);
    const oralExamInputRef = useRef<HTMLInputElement>(null);

    // State for reset dialog
    const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

    // Clinical History Store
    const { 
        patientId: clinicalPatientId,
        patientData, 
        medicalHistory, 
        chiefComplaint,
        isFinalized, 
        resetState: resetClinicalHistory,
        importState: importClinicalHistory,
    } = useClinicalHistoryStore();

    // Oral Exam Store
    const { 
        extraoral, 
        intraoral, 
        higiene, 
        dentalDiagnosis, 
        importDentalState: importOralExam,
    } = useOralExamStore();
    const { patientId: oralExamPatientId } = useClinicalHistoryStore();

    // Handlers for Clinical History
    const handlePrint = useCallback(() => window.print(), []);
    
    const handleExportClinicalHistory = useCallback(() => {
        const stateToExport = {
          patientId: clinicalPatientId,
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
        link.download = `clinical-history-${clinicalPatientId || 'data'}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, [clinicalPatientId, patientData, medicalHistory, chiefComplaint, isFinalized]);

    const handleImportClinicalHistoryClick = useCallback(() => clinicalHistoryInputRef.current?.click(), []);
    
    const handleClinicalHistoryFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text === 'string') {
                    const importedData = JSON.parse(text);
                    const success = importClinicalHistory(importedData);
                    if (success) {
                      toast({ title: "Importación exitosa", description: "La historia clínica se ha cargado correctamente." });
                    } else {
                      throw new Error("El archivo JSON no es válido o está corrupto.");
                    }
                }
            } catch (error: any) {
                toast({ variant: "destructive", title: "Error de importación", description: error.message || "No se pudo procesar el archivo." });
            }
        };
        reader.onerror = () => toast({ variant: "destructive", title: "Error de lectura", description: "No se pudo leer el archivo seleccionado." });
        reader.readAsText(file);
        event.target.value = '';
    }, [importClinicalHistory, toast]);

    const handleResetClinicalHistory = useCallback(() => {
        resetClinicalHistory();
        setIsResetDialogOpen(false);
        toast({ title: "Formulario reseteado", description: "Se ha iniciado una nueva historia clínica." });
    }, [resetClinicalHistory, toast]);


    // Handlers for Oral Exam
    const handleExportOralExam = useCallback(() => {
        const stateToExport = { extraoral, intraoral, higiene, dentalDiagnosis };
        const dataStr = JSON.stringify(stateToExport, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `oral-exam-${oralExamPatientId || 'data'}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, [extraoral, intraoral, higiene, dentalDiagnosis, oralExamPatientId]);

    const handleImportOralExamClick = useCallback(() => oralExamInputRef.current?.click(), []);

    const handleOralExamFileChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (!file) return;
    
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const text = e.target?.result;
              if (typeof text === 'string') {
                const success = importOralExam(text);
                if (success) {
                  toast({ title: 'Importación exitosa', description: 'El estado dental se ha cargado correctamente.' });
                } else {
                  throw new Error('El archivo JSON no es un diagnóstico válido o está corrupto.');
                }
              }
            } catch (error: any) {
              toast({ variant: 'destructive', title: 'Error de importación', description: error.message || 'No se pudo procesar el archivo.' });
            }
          };
          reader.onerror = () => toast({ variant: 'destructive', title: 'Error de lectura', description: 'No se pudo leer el archivo seleccionado.' });
          reader.readAsText(file);
          event.target.value = '';
        },
        [importOralExam, toast]
    );

    const renderClinicalHistoryActions = () => (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={handleImportClinicalHistoryClick}>
                    <Upload /> Importar
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={handleExportClinicalHistory}>
                    <FileJson /> Exportar
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={handlePrint}>
                    <Printer /> PDF
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setIsResetDialogOpen(true)}>
                    <RotateCcw /> Resetear
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    );

    const renderOralExamActions = () => (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={handleImportOralExamClick}>
                    <Upload /> Importar
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={handleExportOralExam}>
                    <FileJson /> Exportar
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    );

    const renderPlanDeTratamientoActions = () => (
        <>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => alert('Función no implementada')}>
                    <Upload /> Importar Plan
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => alert('Función no implementada')}>
                    <FileJson /> Exportar Plan
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => togglePricesModal(true)}>
                    <Tags /> Tratamientos
                </SidebarMenuButton>
            </SidebarMenuItem>
        </>
    );
    
    const renderPlaceholderActions = () => (
        <SidebarMenuItem>
            <SidebarMenuButton disabled>
                <XCircle /> No hay acciones
            </SidebarMenuButton>
        </SidebarMenuItem>
    );

    const renderActions = () => {
        if (pathname.startsWith('/historia-clinica')) {
            return renderClinicalHistoryActions();
        }
        if (pathname.startsWith('/exploracion-bucal')) {
            return renderOralExamActions();
        }
        if (pathname.startsWith('/plan-de-tratamiento')) {
            return renderPlanDeTratamientoActions();
        }
        return renderPlaceholderActions();
    };

    return (
        <>
            <SidebarGroup>
                <SidebarMenu>
                    {renderActions()}
                </SidebarMenu>
            </SidebarGroup>
            
            {/* Hidden file inputs */}
            <input type="file" ref={clinicalHistoryInputRef} className="hidden" accept=".json" onChange={handleClinicalHistoryFileChange} />
            <input type="file" ref={oralExamInputRef} className="hidden" accept=".json" onChange={handleOralExamFileChange} />
            
            {/* Dialog for reset confirmation */}
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
                    <AlertDialogAction onClick={handleResetClinicalHistory}>Sí, Resetear</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
