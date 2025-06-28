'use client';

import React, { useState } from 'react';
import { useTreatmentPlanStore, type BudgetItem } from '@/store/treatment-plan-store';
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
import { cn } from '@/lib/utils';

export function TreatmentPlanForm() {
    const { 
        diagnosis, 
        budgetItems, 
        importDiagnosis,
        addBudgetItem,
        updateBudgetItem,
        removeBudgetItem, 
    } = useTreatmentPlanStore();
    
    const [manualTreatment, setManualTreatment] = useState('');

    // State for discount dialog
    const [discountDialogItem, setDiscountDialogItem] = useState<BudgetItem | null>(null);
    const [discountType, setDiscountType] = useState<'percentage' | 'amount'>('percentage');
    const [discountValue, setDiscountValue] = useState('0');

    // Dummy handler for now
    const handleImportClick = () => {
        alert("Importar diagnóstico desde archivo JSON.");
    };

    const handleAddManualTreatment = () => {
        if (!manualTreatment.trim()) return;
        addBudgetItem({
            treatment: manualTreatment.trim(),
            quantity: 1,
            unitPrice: 0,
            currency: 'MXN',
            discount: { type: 'percentage', value: 0 },
        });
        setManualTreatment('');
    };
    
    const openDiscountDialog = (item: BudgetItem) => {
        setDiscountDialogItem(item);
        setDiscountType(item.discount.type);
        setDiscountValue(String(item.discount.value));
    };

    const handleSaveDiscount = () => {
        if (!discountDialogItem) return;
        updateBudgetItem(discountDialogItem.id, {
            discount: {
                type: discountType,
                value: parseFloat(discountValue) || 0,
            }
        });
        setDiscountDialogItem(null);
    };

    const totalsByCurrency = budgetItems.reduce((acc, item) => {
        if (!acc[item.currency]) {
            acc[item.currency] = { subtotal: 0, total: 0 };
        }
        acc[item.currency].subtotal += item.quantity * item.unitPrice;
        acc[item.currency].total += item.total;
        return acc;
    }, {} as Record<'MXN' | 'USD', { subtotal: number; total: number }>);
    

    const formatCurrency = (amount: number, currency: 'MXN' | 'USD') => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency,
        }).format(amount);
    }

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
                            <Button onClick={handleAddManualTreatment}><PlusCircle className="mr-2 h-4 w-4" /> Agregar</Button>
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
                            {/* Global currency selector removed */}
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
                                    <TableHead className="w-[35%]">Tratamiento</TableHead>
                                    <TableHead className="text-center w-[100px]">Cantidad</TableHead>
                                    <TableHead className="text-right w-[150px]">P. Unitario</TableHead>
                                    <TableHead className="text-center w-[120px]">Moneda</TableHead>
                                    <TableHead className="w-[150px]">Descuento</TableHead>
                                    <TableHead className="text-right w-[150px]">Total</TableHead>
                                    <TableHead className="w-[5%]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {budgetItems.length > 0 ? budgetItems.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{item.treatment}</TableCell>
                                        <TableCell>
                                            <Input type="number" value={item.quantity} onChange={(e) => updateBudgetItem(item.id, { quantity: parseInt(e.target.value) || 0 })} className="w-20 mx-auto text-center" />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="number" value={item.unitPrice} onChange={(e) => updateBudgetItem(item.id, { unitPrice: parseFloat(e.target.value) || 0 })} className="w-28 ml-auto text-right" />
                                        </TableCell>
                                        <TableCell>
                                            <Select value={item.currency} onValueChange={(value: 'MXN' | 'USD') => updateBudgetItem(item.id, { currency: value })}>
                                                <SelectTrigger className="mx-auto w-[100px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="MXN">MXN</SelectItem>
                                                    <SelectItem value="USD">USD</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1">
                                                <Button size="icon" variant="ghost" onClick={() => openDiscountDialog(item)}><Percent className="h-4 w-4" /></Button>
                                                <Button size="icon" variant="ghost" onClick={() => openDiscountDialog(item)}><BadgeDollarSign className="h-4 w-4" /></Button>
                                                <span className="text-xs text-muted-foreground">
                                                  {item.discount.value > 0 && `(${item.discount.value}${item.discount.type === 'percentage' ? '%' : ''})`}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{formatCurrency(item.total, item.currency)}</TableCell>
                                        <TableCell>
                                            <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => removeBudgetItem(item.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center text-muted-foreground h-24">
                                            No hay tratamientos en el presupuesto.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                {Object.entries(totalsByCurrency).map(([currency, totals]) => (
                                    <React.Fragment key={currency}>
                                        <TableRow className="bg-muted/30">
                                            <TableCell colSpan={5} className="text-right font-bold text-base">Subtotal ({currency})</TableCell>
                                            <TableCell className="text-right font-bold text-base">{formatCurrency(totals.subtotal, currency as 'MXN' | 'USD')}</TableCell>
                                            <TableCell />
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={4} />
                                            <TableCell className="text-right">Desc. Global (0%)</TableCell>
                                            <TableCell className="text-right">- {formatCurrency(0, currency as 'MXN' | 'USD')}</TableCell>
                                            <TableCell />
                                        </TableRow>
                                        <TableRow className="bg-muted/50">
                                            <TableCell colSpan={5} className="text-right font-bold text-lg">Total ({currency})</TableCell>
                                            <TableCell className="text-right font-bold text-lg">{formatCurrency(totals.total, currency as 'MXN' | 'USD')}</TableCell>
                                            <TableCell />
                                        </TableRow>
                                    </React.Fragment>
                                ))}
                                {Object.keys(totalsByCurrency).length > 0 && (
                                     <TableRow>
                                        <TableCell colSpan={7} className="text-right">
                                            <Button variant="outline" size="sm" className="mt-2">Aplicar Descuento Global</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
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

            {/* Discount Dialog */}
            <Dialog open={!!discountDialogItem} onOpenChange={(open) => !open && setDiscountDialogItem(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Aplicar Descuento</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <p className="font-medium">{discountDialogItem?.treatment}</p>
                         <RadioGroup value={discountType} onValueChange={(val: 'percentage' | 'amount') => setDiscountType(val)} className="flex items-center gap-4">
                           <div className="flex items-center space-x-2">
                                <RadioGroupItem value="percentage" id="percentage" />
                                <Label htmlFor="percentage">Porcentaje (%)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="amount" id="amount" />
                                <Label htmlFor="amount">Monto fijo ($)</Label>
                            </div>
                        </RadioGroup>
                        <div className="relative">
                           <Input 
                                type="number"
                                value={discountValue}
                                onChange={(e) => setDiscountValue(e.target.value)}
                                className="pr-8"
                           />
                           <span className="absolute inset-y-0 right-3 flex items-center text-muted-foreground text-sm">
                                {discountType === 'percentage' ? '%' : '$'}
                           </span>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="ghost">Cancelar</Button>
                        </DialogClose>
                        <Button onClick={handleSaveDiscount}>Guardar Descuento</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
