'use client';

import { useState } from 'react';
import { useTreatmentPlanStore } from '@/store/treatment-plan-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
} from '@/components/ui/table';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BadgeDollarSign, FileText, Percent, PlusCircle, Trash2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';

export function TreatmentPlanForm() {
    const { diagnosis, budgetItems, currency, setCurrency, importDiagnosis } = useTreatmentPlanStore();
    const [manualTreatment, setManualTreatment] = useState('');

    // Dummy handler for now
    const handleImportClick = () => {
        alert("Importar diagnóstico desde archivo JSON.");
    };

    const subtotal = budgetItems.reduce((acc, item) => acc + item.total, 0);

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>1. Tratamiento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="border p-4 rounded-lg space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <h3 className="font-medium text-foreground">Odontograma y Resumen de Diagnóstico</h3>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" onClick={handleImportClick}>Importar Diagnóstico</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>
                                            <FileText className="mr-2 h-4 w-4" />
                                            Abrir Odontograma
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] w-[95vw] h-[95vh] flex flex-col">
                                        <DialogHeader>
                                            <DialogTitle>Odontograma Interactivo</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex-grow">
                                            <iframe
                                                src="https://preview--dental-chart-pwa-app.lovable.app/"
                                                className="w-full h-full border-0 rounded-md"
                                                title="Odontograma Interactivo"
                                            />
                                        </div>
                                         <DialogFooter>
                                            <DialogClose asChild>
                                                <Button>Guardar</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        {diagnosis.length > 0 ? (
                            <ul className="space-y-2 list-disc list-inside text-sm text-foreground bg-secondary/50 p-4 rounded-md">
                                {diagnosis.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-muted-foreground">Importe un archivo de diagnóstico JSON o use el odontograma para ver el resumen.</p>
                        )}
                    </div>

                    <div className="border p-4 rounded-lg space-y-4">
                        <h3 className="font-medium text-foreground">Añadir Tratamientos</h3>
                        <div className="flex items-end gap-2">
                            <div className="flex-grow space-y-2">
                                <Label htmlFor="manual-treatment">Descripción del tratamiento</Label>
                                <Textarea
                                    id="manual-treatment"
                                    placeholder="Ej: Colocación de corona en molar 16..."
                                    value={manualTreatment}
                                    onChange={(e) => setManualTreatment(e.target.value)}
                                    rows={2}
                                />
                            </div>
                            <Button><PlusCircle className="mr-2 h-4 w-4" /> Agregar</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>2. Creación de Presupuesto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                         <div className="flex items-center gap-2">
                            <Label>Moneda:</Label>
                            <RadioGroup value={currency} onValueChange={(val: 'MXN' | 'USD') => setCurrency(val)} className="flex items-center gap-4">
                               <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="MXN" id="mxn" />
                                    <Label htmlFor="mxn">MXN</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="USD" id="usd" />
                                    <Label htmlFor="usd">USD</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <Button variant="outline">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Agregar Tratamiento de Lista de Precios
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40%]">Tratamiento</TableHead>
                                    <TableHead className="text-center">Cantidad</TableHead>
                                    <TableHead className="text-right">P. Unitario</TableHead>
                                    <TableHead className="text-center">Descuento</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                    <TableHead className="w-[5%]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {budgetItems.length > 0 ? budgetItems.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{item.treatment}</TableCell>
                                        <TableCell className="text-center">
                                            <Input type="number" defaultValue={item.quantity} className="w-20 mx-auto text-center" />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Input type="number" defaultValue={item.unitPrice} className="w-28 ml-auto text-right" />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <div className="flex justify-center items-center gap-1">
                                                <Button size="icon" variant="ghost"><Percent className="h-4 w-4" /></Button>
                                                <Button size="icon" variant="ghost"><BadgeDollarSign className="h-4 w-4" /></Button>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{item.total.toLocaleString('es-MX', { style: 'currency', currency: currency })}</TableCell>
                                        <TableCell>
                                            <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center text-muted-foreground h-24">
                                            No hay tratamientos en el presupuesto.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={4} className="text-right font-bold text-lg">Subtotal</TableCell>
                                    <TableCell className="text-right font-bold text-lg">{subtotal.toLocaleString('es-MX', { style: 'currency', currency: currency })}</TableCell>
                                    <TableCell />
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3} className="text-right">
                                         <Button variant="outline" size="sm">Aplicar Descuento Global</Button>
                                    </TableCell>
                                    <TableCell className="text-right">Desc. Global (0%)</TableCell>
                                    <TableCell className="text-right">- $0.00</TableCell>
                                    <TableCell />
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={4} className="text-right font-bold text-xl">Total</TableCell>
                                    <TableCell className="text-right font-bold text-xl">{subtotal.toLocaleString('es-MX', { style: 'currency', currency: currency })}</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>3. Consentimientos Informados</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button disabled>Crear Consentimientos Informados</Button>
                </CardContent>
            </Card>
        </div>
    );
}
