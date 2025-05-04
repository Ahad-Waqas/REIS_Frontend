import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
Sidebar,
SidebarContent,
SidebarFooter,
SidebarGroup,
SidebarGroupContent,
SidebarGroupLabel,
SidebarMenu,
SidebarMenuButton,
SidebarMenuItem,
SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
{
    title: "Home",
    url: "#",
    icon: Home,
},
{
    title: "Inbox",
    url: "#",
    icon: Inbox,
},
{
    title: "Calendar",
    url: "#",
    icon: Calendar,
},
{
    title: "Search",
    url: "#",
    icon: Search,
},

]

export function AppSidebar() {
return (
    <Sidebar collapsible="icon">
    <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                    <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                    </a>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter className="flex items-center justify-between fixed bottom-0 left-0">
        <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <a href="#">
                    <Settings />
                    <span>Settings</span>
                    
                    </a>
                </SidebarMenuButton>
                </SidebarMenuItem>
        <SidebarGroupContent>
            <SidebarTrigger/>
        </SidebarGroupContent>
        </SidebarFooter>
    </SidebarContent>
    </Sidebar>
)
}
