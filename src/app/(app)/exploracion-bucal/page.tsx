'use client';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { OralExamForm } from '@/components/oral-exam-form';
import { FileText, Upload } from 'lucide-react';
import { useOralExamStore } from '@/store/oral-exam-store';
import { useToast } from '@/hooks/use-toast';
import { useCallback, useRef } from 'react';

export default function ExploracionBucalPage() {
  const { importDentalState } = useOralExamStore();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result;
          if (typeof text === 'string') {
            const success = importDentalState(text);
            if (success) {
              toast({
                title: 'Importación exitosa',
                description:
                  'El estado dental se ha cargado correctamente.',
              });
            } else {
              throw new Error(
                'El archivo JSON no es un diagnóstico válido o está corrupto.'
              );
            }
          }
        } catch (error: any) {
          console.error('Error processing JSON file:', error);
          toast({
            variant: 'destructive',
            title: 'Error de importación',
            description:
              error.message || 'No se pudo procesar el archivo.',
          });
        }
      };
      reader.onerror = () => {
        toast({
          variant: 'destructive',
          title: 'Error de lectura',
          description: 'No se pudo leer el archivo seleccionado.',
        });
      };
      reader.readAsText(file);
      event.target.value = '';
    },
    [importDentalState, toast]
  );

  return (
    <>
      <PageHeader title="Exploración Bucal">
        <Button
          variant="outline"
          size="sm"
          onClick={handleImportClick}
          className="gap-1.5"
        >
          <Upload className="h-4 w-4" />
          <span className="hidden sm:inline">Importar Diagnóstico</span>
        </Button>
        <Button variant="default" size="sm" className="gap-1.5">
          <FileText className="h-4 w-4" />
          <span className="hidden sm:inline">Abrir Odontograma</span>
        </Button>
      </PageHeader>
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <OralExamForm />
        </div>
      </main>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".json"
        onChange={handleFileChange}
      />
    </>
  );
}
