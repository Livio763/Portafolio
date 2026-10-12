"use client";

import { motion } from "framer-motion";

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-slate-950 transition-colors pointer-events-none">
      {/* Ambient Radial Gradients */}
      <div className="absolute -top-[15%] -left-[10%] h-[550px] w-[550px] rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="absolute top-[40%] -right-[15%] h-[600px] w-[600px] rounded-full bg-sky-600/15 blur-[130px]" />
      <div className="absolute -bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Grid 3D con perspectiva */}
      <div 
        className="absolute inset-0 scale-150 opacity-25"
        style={{
          transform: "perspective(900px) rotateX(60deg)",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, transparent, 15% black, 85% black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, 15% black, 85% black, transparent)",
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ y: 0 }}
          animate={{ y: 44 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
      </div>
    </div>
  );
}
