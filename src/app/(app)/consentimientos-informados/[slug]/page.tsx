'use client';

import { useSearchParams, useParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import { ConsentForm } from '@/components/consent-form';
import { useEffect, useState } from 'react';
import { useConsentStore } from '@/store/consent-store';
import { Button } from '@/components/ui/button';
import { useClinicStore } from '@/store/clinic-store';
import { consentFormsData } from '@/data/consent-forms';
import { ConsentContentRenderer } from '@/components/consent-content-renderer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { slugify } from '@/lib/utils';

export default function ConsentimientoPage() {
    const params = useParams<{ slug: string }>();
    const searchParams = useSearchParams();
    const defaultTitle = searchParams.get('title') || 'Consentimiento Informado';
    
    const [patientSignature, setPatientSignature] = useState('');
    const [customRisks, setCustomRisks] = useState('');

    const { 
        resetConsentState,
        isFinalized,
        finalizeConsent,
        consentDecision,
        hasAcknowledged,
    } = useConsentStore();
    const { doctorInfo } = useClinicStore();
    const slug = params.slug;

    useEffect(() => {
        resetConsentState();
        setPatientSignature('');
        setCustomRisks('');
    }, [resetConsentState, slug]);

    const consentData = consentFormsData.find(form => slugify(form.slug) === slug);
    const title = consentData?.title || defaultTitle;

    return (
        <>
            <PageHeader title={title} />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                   <ConsentForm
                        patientSignature={patientSignature}
                        setPatientSignature={setPatientSignature}
                   >
                        {consentData ? (
                            <ConsentContentRenderer 
                                data={consentData} 
                                doctorName={doctorInfo.name} 
                                customRisks={customRisks}
                                onCustomRisksChange={setCustomRisks}
                                isFinalized={isFinalized}
                            />
                        ) : (
                            <Card className="mt-8">
                                <CardHeader>
                                    <CardTitle>Contenido no disponible</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>El contenido para este consentimiento informado aún no ha sido agregado. Estará disponible próximamente.</p>
                                </CardContent>
                            </Card>
                        )}
                   </ConsentForm>
                   {!isFinalized && (
                        <div className="flex justify-end pt-6 print:hidden">
                            <Button
                                size="lg"
                                onClick={finalizeConsent}
                                disabled={!patientSignature || !consentDecision || !doctorInfo.signature || !hasAcknowledged}
                            >
                                Finalizar
                            </Button>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
