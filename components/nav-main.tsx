"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-3xl text-white pt-4 pb-8">
        SmartFarm
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className={item ? "group/collapsible" : ""}
          >
            {item.items != undefined? 
                        <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon className="text-white"/>}
                            <span className="text-white">{item.title}</span>
                            {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span className="text-white">{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
              :
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon className="text-white"/>}
                  <span className="text-white">{item.title}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            }
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
