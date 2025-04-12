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
  Sprout,
  SquareTerminal,
  User2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  const handleLogOut = () => {
    document.cookie = 'gid=; Max-Age=0; path=/;'; //remove cookie
    router.push('/login');
  }
  
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="flex flex-row items-center bg-secondary-80">
        <Sprout className="h-[32px] w-[32px]"></Sprout>
        <div className="font-semibold text-[32px]">
          SmartFarm
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-secondary-80">
        <NavMain items={data.navMain} className={data.design} />
        <button 
          onClick={handleLogOut}
          className="flex flex-row justify-left gap-4 items-center px-6 rounded-xl">Log out</button>
      </SidebarContent>
      <SidebarRail className="bg-secondary-80">
      </SidebarRail>
    </Sidebar>
  )
}

const data = {
  //Nội dung các nút navbar
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
  design: {
    menuButton: 'text-black ',
  }
}
