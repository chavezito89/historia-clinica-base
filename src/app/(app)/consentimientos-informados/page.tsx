'use client';

import { PageHeader } from '@/components/page-header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    Baby,
    CircleArrowRight,
    Icon,
    Search,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';

const consentTypes: { title: string; icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<Icon>> }[] = [
    { title: 'Paciente menor de edad', icon: Baby },
    { title: 'Blanqueamiento', icon: CircleArrowRight },
    { title: 'Carillas', icon: CircleArrowRight },
    { title: 'Coronas y puentes fijos', icon: CircleArrowRight },
    { title: 'Extracción dental', icon: CircleArrowRight },
    { title: 'Extracción de terceros molares y dientes retenidos', icon: CircleArrowRight },
    { title: 'Endodoncia', icon: CircleArrowRight },
    { title: 'Profilaxis', icon: CircleArrowRight },
    { title: 'Reconstrucción y endoposte', icon: CircleArrowRight },
    { title: 'Tratamiento periodontal no quirurgico', icon: CircleArrowRight },
    { title: 'Tratamiento periodontal quirurgico', icon: CircleArrowRight },
];

export default function ConsentimientosInformadosPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredConsentTypes = useMemo(() => {
        if (!searchQuery.trim()) {
            return consentTypes;
        }
        return consentTypes.filter(consent => 
            consent.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <>
            <PageHeader title="Consentimientos Informados" />
            <main className="container mx-auto p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Seleccione el tipo de consentimiento a generar</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        placeholder="Buscar consentimiento..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            
                            {filteredConsentTypes.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredConsentTypes.map((consent) => (
                                        <button
                                            key={consent.title}
                                            className="text-left w-full rounded-lg overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            onClick={() => { /* Placeholder for future action */ }}
                                        >
                                            <Card className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors h-full">
                                                <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                                                    <consent.icon className="h-8 w-8 shrink-0 text-primary group-hover:text-inherit transition-colors" />
                                                    <p className="text-base font-medium">{consent.title}</p>
                                                </CardHeader>
                                            </Card>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-muted-foreground">
                                    <p className="font-medium">No se encontraron resultados</p>
                                    <p className="text-sm">Intente con otro término de búsqueda.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
