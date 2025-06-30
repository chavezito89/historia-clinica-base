'use client';

import { PageHeader } from '@/components/page-header';
import { ClinicInfoForm } from '@/components/clinic-info-form';
import { DoctorInfoForm } from '@/components/doctor-info-form';

export default function ConfiguracionPage() {
  return (
    <>
      <PageHeader title="Configuración" />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <ClinicInfoForm />
          <DoctorInfoForm />
        </div>
      </main>
    </>
  );
}
