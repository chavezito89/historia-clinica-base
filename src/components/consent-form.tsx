'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ConsentFormHeader } from "./consent-form-header";
import { ConsentFormFooter } from "./consent-form-footer";

interface ConsentFormProps {
    children: React.ReactNode;
    patientSignature: string;
    setPatientSignature: (signature: string) => void;
}

export function ConsentForm({ children, patientSignature, setPatientSignature }: ConsentFormProps) {
    return (
        <Card className="print:shadow-none print:border-none">
            <CardContent className="p-4 md:p-8">
                <ConsentFormHeader />
                <main className="my-8 text-sm text-foreground space-y-4 print:text-base">
                    {children}
                </main>
                <ConsentFormFooter 
                    patientSignature={patientSignature}
                    setPatientSignature={setPatientSignature}
                />
            </CardContent>
        </Card>
    );
}
