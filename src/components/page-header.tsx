'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

export function PageHeader({ title, children }: { title: string, children?: React.ReactNode }) {
    return (
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <SidebarTrigger />
                    <h1 className="text-xl font-bold font-headline text-foreground">
                        {title}
                    </h1>
                </div>
                {children && <div className="flex items-center gap-2">{children}</div>}
            </div>
        </header>
    );
}
