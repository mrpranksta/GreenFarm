import type { Metadata } from "next";
import "@/app/globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vn">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex min-h-screen relative w-full bg-gray-100">
            <SidebarTrigger className="absolute top-0" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
