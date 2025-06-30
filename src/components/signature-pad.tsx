'use client';

import { useRef, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Eraser } from 'lucide-react';
import { Label } from './ui/label';

interface SignaturePadProps {
    label: string;
    signature: string;
    onSave: (signature: string) => void;
    onClear: () => void;
    disabled?: boolean;
}

export function SignaturePad({ label, signature, onSave, onClear, disabled = false }: SignaturePadProps) {
    const sigPadRef = useRef<SignatureCanvas | null>(null);
    const canvasId = `signature-canvas-${label.replace(/\s+/g, '-')}`;

    useEffect(() => {
        // Ensure canvas is empty before loading new data
        if (sigPadRef.current && signature && sigPadRef.current.isEmpty()) {
            sigPadRef.current.fromDataURL(signature);
        }
    }, [signature]);

    const handleSave = () => {
        if (disabled || !sigPadRef.current) return;
        if (sigPadRef.current.isEmpty()) {
            onSave('');
            return;
        }
        const signatureImage = sigPadRef.current.toDataURL('image/png');
        if (signatureImage) {
            onSave(signatureImage);
        }
    };

    const handleClear = () => {
        sigPadRef.current?.clear();
        onClear();
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2 print:hidden">
                 <Label htmlFor={canvasId}>Firme en el siguiente recuadro</Label>
                 <div
                    className={cn(
                        'relative w-full h-40 rounded-md border bg-background',
                        disabled && 'pointer-events-none bg-muted opacity-70'
                    )}
                 >
                    <SignatureCanvas
                        ref={sigPadRef}
                        penColor="black"
                        canvasProps={{
                            id: canvasId,
                            className: 'w-full h-full rounded-md',
                        }}
                        onEnd={handleSave}
                    />
                </div>
                <div className="flex justify-end">
                    {!disabled && (
                        <Button variant="outline" size="sm" onClick={handleClear}>
                            <Eraser className="mr-2 h-4 w-4" />
                            Limpiar
                        </Button>
                    )}
                </div>
            </div>
            
            <div className="hidden print:block pt-12">
                <div className="w-full mx-auto">
                    <div className="border-t border-black pt-2 text-center">
                        {signature ? (
                            <img src={signature} alt={`Firma de ${label}`} className="h-16 mx-auto" />
                        ) : (
                            <div className="h-16"></div>
                        )}
                        <p className="text-sm mt-2">{label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
