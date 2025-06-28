'use client';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PreciosPage() {
    return (
        <>
            <PageHeader title="Lista de Precios" />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>En construcción</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Esta sección para configurar la lista de precios de los tratamientos estará disponible próximamente.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
