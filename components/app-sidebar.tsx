"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  CalendarCheck2,
  Command,
  Frame,
  GalleryVerticalEnd,
  History,
  House,
  Map,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
  User2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  // user: {
  //   name: "user",
  //   email: "m@example.com",
  //   avatar: ""
  // },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
    },
    {
      title: "Devices",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Schedules",
      url: "#",
      icon: CalendarCheck2,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "History",
      url: "#",
      icon: History,
    },
    {
      title: "User",
      url: "#",
      icon: User2,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        GreenFarm
      </SidebarHeader> */}
      <SidebarContent className="bg-[#426653]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
