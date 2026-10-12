"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function SkillsSection() {
  const categories = [
    {
      title: "Frontend",
      skills: PORTFOLIO_DATA.skills.frontend,
    },
    {
      title: "Backend",
      skills: PORTFOLIO_DATA.skills.backend,
    },
    {
      title: "Bases de Datos",
      skills: PORTFOLIO_DATA.skills.databases,
    },
    {
      title: "Despliegue & Nube",
      skills: PORTFOLIO_DATA.skills.deployment,
    },
    {
      title: "Herramientas",
      skills: PORTFOLIO_DATA.skills.tools,
    },
    {
      title: "Metodologías",
      skills: PORTFOLIO_DATA.skills.methodologies,
    },
  ];

  return (
    <section id="habilidades" className="py-16 border-t border-slate-900">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Habilidades Técnicas
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Stack principal y metodologías de trabajo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div 
              key={cat.title} 
              className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 transition-colors hover:border-slate-700"
            >
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
