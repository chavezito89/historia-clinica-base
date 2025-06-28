'use client';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson } from 'lucide-react';

export default function PlanDeTratamientoPage() {
    return (
        <>
            <PageHeader title="Plan de Tratamiento">
                <Button variant="outline" size="sm" className="gap-1.5" disabled>
                    <FileJson className="h-4 w-4" />
                    <span className="hidden sm:inline">Exportar</span>
                </Button>
            </PageHeader>
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>En construcción</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Esta sección estará disponible próximamente.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
