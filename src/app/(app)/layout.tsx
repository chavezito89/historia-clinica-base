'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ClipboardPlus, Stethoscope, ListChecks, FileText, FileScan, CalendarClock, Tags } from 'lucide-react';
import React from 'react';
import { PageActions } from '@/components/page-actions';

const navItems = [
  { href: '/historia-clinica', label: 'Historia Clínica', icon: ClipboardPlus },
  { href: '/exploracion-bucal', label: 'Exploración Bucal', icon: Stethoscope },
  { href: '/plan-de-tratamiento', label: 'Plan de Tratamiento', icon: ListChecks },
  { href: '/consentimientos-informados', label: 'Consentimientos', icon: FileText },
  { href: '/rx-y-estudios', label: 'RX y Estudios', icon: FileScan },
  { href: '/progreso-por-cita', label: 'Progreso por Cita', icon: CalendarClock },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold font-headline text-foreground">
                Dental History Pro
              </h1>
            </div>
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname.startsWith(item.href)} tooltip={item.label}>
                  <Link href={item.href}>
                    <item.icon />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <PageActions />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-secondary/30">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
