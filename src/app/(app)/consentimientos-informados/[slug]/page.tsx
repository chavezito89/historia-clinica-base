'use client';

import { useSearchParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import { ConsentForm } from '@/components/consent-form';

export default function ConsentimientoPage({ params }: { params: { slug: string } }) {
    const searchParams = useSearchParams();
    const title = searchParams.get('title') || 'Consentimiento Informado';

    // This is where we would fetch and display the specific content for each consent type.
    // For now, it's a placeholder.
    const ConsentContent = () => (
        <div>
            <h3 className="font-bold text-base mb-4">{title}</h3>
            <p>
                Este es el espacio donde se detallará la información específica del procedimiento de <strong>{title}</strong>. 
                Aquí se explicarán los beneficios, riesgos, alternativas y el procedimiento en sí.
            </p>
            <p>
                Por ahora, este es un texto de ejemplo. La funcionalidad completa para cada tipo de consentimiento se implementará a continuación.
            </p>
        </div>
    );

    return (
        <>
            <PageHeader title={title} />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                   <ConsentForm>
                        <ConsentContent />
                   </ConsentForm>
                </div>
            </main>
        </>
    );
}
