'use client';

import React, { useState, useMemo } from 'react';
import { usePricingStore, type PriceItem } from '@/store/pricing-store';
import { useTreatmentPlanStore } from '@/store/treatment-plan-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddTreatmentFromListModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export function AddTreatmentFromListModal({ isOpen, onOpenChange }: AddTreatmentFromListModalProps) {
    const { priceList } = usePricingStore();
    const { addBudgetItem } = useTreatmentPlanStore();
    const [searchQuery, setSearchQuery] = useState('');
    const { toast } = useToast();

    const sortedAndFilteredList = useMemo(() => {
        return priceList
            .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [priceList, searchQuery]);

    const handleAddTreatment = (item: PriceItem) => {
        addBudgetItem({
            treatment: item.name,
            quantity: 1,
            unitPrice: item.price,
            currency: item.currency,
            discount: { type: 'percentage', value: 0 },
        });
        toast({ title: "Tratamiento agregado", description: `"${item.name}" se ha añadido al presupuesto.` });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl h-[70vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Agregar Tratamiento desde Lista de Precios</DialogTitle>
                </DialogHeader>
                <div className="flex-grow flex flex-col gap-4 overflow-hidden">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Buscar tratamiento..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <div className="flex-grow overflow-auto border rounded-md">
                        <Table>
                            <TableHeader className="sticky top-0 bg-background">
                                <TableRow>
                                    <TableHead>Tratamiento</TableHead>
                                    <TableHead className="w-[120px] text-right">Precio</TableHead>
                                    <TableHead className="w-[80px]">Moneda</TableHead>
                                    <TableHead className="w-[80px] text-center">Acción</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedAndFilteredList.length > 0 ? sortedAndFilteredList.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            {item.name}
                                            {item.costPerFace && <span className="text-xs text-muted-foreground ml-2">(por cara)</span>}
                                        </TableCell>
                                        <TableCell className="text-right">{item.price.toFixed(2)}</TableCell>
                                        <TableCell>{item.currency}</TableCell>
                                        <TableCell className="text-center">
                                            <Button size="icon" variant="ghost" onClick={() => handleAddTreatment(item)}>
                                                <PlusCircle className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                                            No hay tratamientos en la lista.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
