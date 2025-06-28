'use client';

import { PageHeader } from '@/components/page-header';
import { PricesModal } from '@/components/prices-modal';
import { TreatmentPlanForm } from '@/components/treatment-plan-form';
import { useUiStore } from '@/store/ui-store';

export default function PlanDeTratamientoPage() {
    const { isPricesModalOpen, togglePricesModal } = useUiStore();
    return (
        <>
            <PageHeader title="Plan de Tratamiento" />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <TreatmentPlanForm />
                </div>
            </main>
            <PricesModal 
                isOpen={isPricesModalOpen}
                onOpenChange={() => togglePricesModal()}
            />
        </>
    );
}
