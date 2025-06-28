'use client';

import { PageHeader } from '@/components/page-header';
import { TreatmentPlanForm } from '@/components/treatment-plan-form';

export default function PlanDeTratamientoPage() {
    return (
        <>
            <PageHeader title="Plan de Tratamiento" />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <TreatmentPlanForm />
                </div>
            </main>
        </>
    );
}
