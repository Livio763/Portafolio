"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  ArrowRight,
  Copy,
  Check
} from "lucide-react";
import { SkillsSection } from "@/components/skills-section";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen text-slate-100">
      
      {/* ========================================================
          HERO SECTION (Minimalista, sobrio y funcional)
         ======================================================== */}
      <section id="inicio" className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-10 md:grid-cols-12">
            
            {/* Texto y Acciones */}
            <div className="md:col-span-8 flex flex-col items-start">
              
              {/* Badge de disponibilidad: Solo "Disponible para proyectos" */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>{PORTFOLIO_DATA.personal.statusText}</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {PORTFOLIO_DATA.personal.shortName}
              </h1>

              <p className="mt-2 text-sm sm:text-base font-medium text-sky-400">
                {PORTFOLIO_DATA.personal.title} • {PORTFOLIO_DATA.personal.university}
              </p>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.personal.bio}
              </p>

              {/* Botones principales */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a 
                  href="#proyectos" 
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-sky-500"
                >
                  <span>Ver proyectos</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a 
                  href={PORTFOLIO_DATA.personal.cvPdfUrl} 
                  download="Bruno_Hidalgo_CV.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Descargar CV</span>
                </a>

                <a 
                  href="#contacto" 
                  className="inline-flex items-center rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <span>Contacto</span>
                </a>
              </div>

              {/* Enlaces directos a redes y contacto */}
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-800/80">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-colors hover:border-sky-500/50 hover:text-sky-400"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
                  title="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition-colors hover:border-red-500/50 hover:text-red-400"
                  title="Correo"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

            </div>

            {/* Foto de perfil: Extraída del CV, marco ovalado y minimalista */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-full overflow-hidden border-2 border-slate-800/80 bg-slate-900 shadow-xl shadow-sky-500/5 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/avatar.png"
                  alt="Bruno Hidalgo"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SOBRE MÍ
         ======================================================== */}
      <section id="sobre-mi" className="py-16 border-t border-slate-900">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Sobre mí
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 text-sm text-slate-300 leading-relaxed">
            <p>
              Estudiante de Ingeniería en Sistemas en la UAGRM con experiencia en desarrollo de aplicaciones web y backend. Me enfoco en escribir código estructurado, buenas prácticas de desarrollo y el trabajo en equipo bajo marcos ágiles.
            </p>
            <p className="text-slate-400">
              Cuento con experiencia en la construcción de arquitecturas completas con Laravel y Next.js, modelado de bases de datos relacionales y despliegue en entornos como Vercel y Supabase.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROYECTOS (Minimalistas, sin imágenes)
         ======================================================== */}
      <section id="proyectos" className="py-16 border-t border-slate-900">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Proyectos
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Selección de trabajos y proyectos destacados.
              </p>
            </div>

            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.projects.map((project) => (
              <article 
                key={project.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-slate-700 hover:bg-slate-900/80"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-sky-400">
                      {project.category}
                    </span>
                    {project.highlightBadge && (
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 font-medium">
                        {project.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded border border-slate-800 bg-slate-950 px-2 py-0.5 text-[10px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Ver código</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          HABILIDADES TÉCNICAS (Resumidas y limpias)
         ======================================================== */}
      <SkillsSection />

      {/* ========================================================
          TRAYECTORIA (InnovaHack + Proyecto GIA unificados)
         ======================================================== */}
      <section id="trayectoria" className="py-16 border-t border-slate-900">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Trayectoria
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Formación y experiencia destacada.
            </p>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.timeline.map((item, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-slate-700"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">
                    {item.period}
                  </span>
                </div>
                
                <div className="text-xs font-medium text-sky-400 mb-2">
                  {item.organization}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded bg-slate-950 px-2 py-0.5 text-[10px] text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          CONTACTO (100% Funcional y Directo)
         ======================================================== */}
      <section id="contacto" className="py-16 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Contacto
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Canales directos para conversar o colaborar.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* WhatsApp */}
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5"
            >
              <div>
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs font-semibold">WhatsApp</span>
                </div>
                <p className="text-xs text-slate-300">{PORTFOLIO_DATA.personal.phone}</p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                Iniciar chat <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-sky-500/50 hover:bg-sky-500/5"
            >
              <div>
                <div className="flex items-center gap-2 text-sky-400 mb-2">
                  <Linkedin className="h-4 w-4" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </div>
                <p className="text-xs text-slate-300">Bruno Hidalgo</p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-sky-400 flex items-center gap-1">
                Ver perfil <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-slate-600 hover:bg-slate-800/40"
            >
              <div>
                <div className="flex items-center gap-2 text-slate-200 mb-2">
                  <Github className="h-4 w-4" />
                  <span className="text-xs font-semibold">GitHub</span>
                </div>
                <p className="text-xs text-slate-300">@Livio763</p>
              </div>
              <span className="mt-4 text-[11px] font-medium text-slate-300 flex items-center gap-1">
                Explorar repos <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            {/* Correo Electrónico */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div>
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-xs font-semibold">Correo</span>
                </div>
                <p className="text-xs text-slate-300 truncate" title={PORTFOLIO_DATA.personal.email}>
                  {PORTFOLIO_DATA.personal.email}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-[11px] font-medium text-red-400 hover:underline flex items-center gap-1"
                >
                  Enviar <ExternalLink className="h-3 w-3" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="ml-auto inline-flex items-center gap-1 rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300 hover:bg-slate-700"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          FOOTER MINIMALISTA
         ======================================================== */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Bruno Hidalgo.</p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-slate-300">Inicio</a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.personal.cvPdfUrl} download="Bruno_Hidalgo_CV.pdf" className="hover:text-sky-400">Descargar CV</a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.personal.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
