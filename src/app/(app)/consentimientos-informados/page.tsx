'use client';

import { PageHeader } from '@/components/page-header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    Baby,
    Sparkles,
    Layers,
    Award,
    XCircle,
    XOctagon,
    GitPullRequest,
    Wand2,
    Construction,
    Droplets,
    Scissors,
    Icon,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import React from 'react';

const consentTypes: { title: string; icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<Icon>> }[] = [
    { title: 'Paciente menor de edad', icon: Baby },
    { title: 'Blanqueamiento', icon: Sparkles },
    { title: 'Carillas', icon: Layers },
    { title: 'Coronas y puentes fijos', icon: Award },
    { title: 'Extracción dental', icon: XCircle },
    { title: 'Extracción de terceros molares y dientes retenidos', icon: XOctagon },
    { title: 'Endodoncia', icon: GitPullRequest },
    { title: 'Profilaxis', icon: Wand2 },
    { title: 'Reconstrucción y endoposte', icon: Construction },
    { title: 'Tratamiento periodontal no quirurgico', icon: Droplets },
    { title: 'Tratamiento periodontal quirurgico', icon: Scissors },
];

export default function ConsentimientosInformadosPage() {
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {consentTypes.map((consent) => (
                                    <button
                                        key={consent.title}
                                        className="text-left w-full rounded-lg overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        onClick={() => { /* Placeholder for future action */ }}
                                    >
                                        <Card className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors h-full">
                                            <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                                                <consent.icon className="h-8 w-8 text-primary group-hover:text-inherit transition-colors" />
                                                <p className="text-base font-medium">{consent.title}</p>
                                            </CardHeader>
                                        </Card>
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
