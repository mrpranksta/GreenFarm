'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css" 
import axios from 'axios'
import { useEffect, useRef, useState, createContext, useContext, useCallback } from 'react'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ensures cookie is sent
axios.defaults.withCredentials = true
const serverUrl = process.env.SERVER_URL

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vn">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}


