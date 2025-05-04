// app/auth/layout.tsx
import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export default function DashboardLayout({
children,
}: {
children: React.ReactNode
}) {
return (
    <SidebarProvider>
        <AppSidebar/>
        <main>
            <SidebarTrigger/>
            {children}
        </main>
    </SidebarProvider>
)
}
