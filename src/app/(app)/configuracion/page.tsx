'use client';

import { PageHeader } from '@/components/page-header';
import { ClinicForm } from '@/components/clinic-form';

export default function ConfiguracionPage() {
  return (
    <>
      <PageHeader title="Configuración" />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <ClinicForm />
        </div>
      </main>
    </>
  );
}
