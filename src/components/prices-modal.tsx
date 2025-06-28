'use client';

import React, { useState, useMemo } from 'react';
import { usePricingStore, type PriceItem } from '@/store/pricing-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
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
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FileJson, Pencil, PlusCircle, Search, Trash2, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface PricesModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export function PricesModal({ isOpen, onOpenChange }: PricesModalProps) {
    const { priceList, addPriceItem, updatePriceItem, removePriceItem } = usePricingStore();

    const [searchQuery, setSearchQuery] = useState('');
    const [isEditing, setIsEditing] = useState<PriceItem | null>(null);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState<'MXN' | 'USD'>('MXN');
    const [costPerFace, setCostPerFace] = useState(false);

    const sortedAndFilteredList = useMemo(() => {
        return priceList
            .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [priceList, searchQuery]);

    const resetForm = () => {
        setIsEditing(null);
        setName('');
        setPrice('');
        setCurrency('MXN');
        setCostPerFace(false);
    };

    const handleEditClick = (item: PriceItem) => {
        setIsEditing(item);
        setName(item.name);
        setPrice(String(item.price));
        setCurrency(item.currency);
        setCostPerFace(item.costPerFace);
    };

    const handleSave = () => {
        if (!name.trim() || !price.trim()) {
            alert('El nombre y el precio son obligatorios.');
            return;
        }
        const priceItemData = { 
            name: name.trim(), 
            price: parseFloat(price) || 0, 
            currency, 
            costPerFace 
        };
        if (isEditing) {
            updatePriceItem(isEditing.id, priceItemData);
        } else {
            addPriceItem(priceItemData);
        }
        resetForm();
    };

    const handleExport = () => {
        const dataStr = JSON.stringify(priceList, null, 2);
        const dataBlob = new Blob([dataStr], {type: "application/json"});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `lista-de-precios.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Gestionar Lista de Precios</DialogTitle>
                </DialogHeader>
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                    {/* Main list */}
                    <div className="md:col-span-2 flex flex-col gap-4 h-full">
                        <div className="flex items-center gap-2">
                             <div className="relative flex-grow">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Buscar tratamiento..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9"
                                />
                             </div>
                            <Button variant="outline" onClick={handleExport}><FileJson className="mr-2" /> Exportar</Button>
                        </div>
                        <div className="flex-grow overflow-auto border rounded-md">
                            <Table>
                                <TableHeader className="sticky top-0 bg-background">
                                    <TableRow>
                                        <TableHead>Tratamiento</TableHead>
                                        <TableHead className="w-[150px] text-right">Precio</TableHead>
                                        <TableHead className="w-[80px]">Moneda</TableHead>
                                        <TableHead className="w-[80px]">Acciones</TableHead>
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
                                            <TableCell>
                                                <div className="flex items-center gap-1">
                                                    <Button size="icon" variant="ghost" onClick={() => handleEditClick(item)}><Pencil className="h-4 w-4" /></Button>
                                                    <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => removePriceItem(item.id)}><Trash2 className="h-4 w-4" /></Button>
                                                </div>
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

                    {/* Add/Edit Form */}
                    <div className="flex flex-col h-full">
                         <Card className="flex-grow flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-lg flex justify-between items-center">
                                    {isEditing ? 'Editar Tratamiento' : 'Agregar Tratamiento'}
                                    {isEditing && <Button size="icon" variant="ghost" onClick={resetForm}><X className="h-4 w-4"/></Button>}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="treatment-name">Nombre del Tratamiento</Label>
                                    <Input id="treatment-name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="treatment-price">Precio</Label>
                                        <Input id="treatment-price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="treatment-currency">Moneda</Label>
                                        <Select value={currency} onValueChange={(v: 'MXN' | 'USD') => setCurrency(v)}>
                                            <SelectTrigger id="treatment-currency">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="MXN">MXN</SelectItem>
                                                <SelectItem value="USD">USD</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 pt-2">
                                    <Switch id="cost-per-face" checked={costPerFace} onCheckedChange={setCostPerFace} />
                                    <Label htmlFor="cost-per-face">Costo por cara</Label>
                                </div>
                                <div className="flex-grow" />
                                <Button onClick={handleSave}>
                                    <PlusCircle className="mr-2" />
                                    {isEditing ? 'Guardar Cambios' : 'Agregar a la Lista'}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
