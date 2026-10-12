import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Background3D } from "@/components/background-3d";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Rodrigo Hidalgo — Portafolio | Estudiante de Ing. en Sistemas & Desarrollador",
  description: "Portafolio profesional de Bruno Hidalgo: desarrollo web full stack (Next.js, Laravel), integración de IA con Groq, proyectos reales (ChildFund Bolivia) y hardware.",
  keywords: [
    "Bruno Hidalgo",
    "Bruno Rodrigo Alberto Hidalgo",
    "Ingeniería en Sistemas",
    "UAGRM",
    "Desarrollador Full Stack",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Bolivia",
    "Santa Cruz"
  ],
  authors: [{ name: "Bruno Rodrigo Alberto Hidalgo" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Bruno Rodrigo Hidalgo — Portafolio Profesional",
    description: "Estudiante de Ingeniería en Sistemas (UAGRM). Proyectos con Next.js, Laravel, Groq AI y reconocimiento en InnovaHack 2025.",
    type: "website",
    locale: "es_BO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 transition-colors selection:bg-sky-500 selection:text-white`}>
        <ThemeProvider>
          <Background3D />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
