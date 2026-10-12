# Portafolio Personal — Bruno Rodrigo Alberto Hidalgo

Portafolio profesional construido con **Next.js 16**, **TypeScript**, **Tailwind CSS v4** y **next-themes** para soporte de tema claro/oscuro. Arquitectura moderna, escalable y optimizada para performance.

---

## 🚀 Stack Tecnológico

| Herramienta       | Versión  | Uso                                      |
|-------------------|----------|------------------------------------------|
| **Next.js**       | 16.0.1   | Framework React con SSR/SSG/ISR         |
| **React**         | 19.2.0   | Librería de UI y componentes            |
| **TypeScript**    | ^5       | Tipado estático                         |
| **Tailwind CSS**  | ^4       | Estilos utilitarios y diseño responsive |
| **next-themes**   | ^0.4.6   | Gestión de tema claro/oscuro            |
| **ESLint**        | ^9       | Linter para código limpio               |

---

## 📂 Estructura del Proyecto

```
portfolio-next/
├── public/               # Imágenes, favicon, manifest
│   ├── favicon.svg
│   └── placeholder.svg
├── src/
│   ├── app/              # App Router (Next.js)
│   │   ├── layout.tsx    # Layout raíz, metadata, fuentes
│   │   ├── page.tsx      # Página principal (landing)
│   │   └── globals.css   # Estilos globales (Tailwind)
│   └── components/       # Componentes reutilizables
│       ├── Navbar.tsx
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── tailwind.config.ts    # Configuración de Tailwind (darkMode: "class")
├── tsconfig.json         # Configuración de TypeScript
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

---

## 🎨 Secciones del Portafolio

- **Hero**: Presentación con nombre, rol, CTA y avatar.
- **Sobre mí**: Biografía y puntos destacados.
- **Habilidades**: Tags de tecnologías dominadas.
- **Proyectos**: Grid de tarjetas con miniaturas, descripción, demo y código.
- **Experiencia**: Timeline con roles, empresas y responsabilidades.
- **Contacto**: Botones para correo, LinkedIn y GitHub.
- **Footer**: Copyright dinámico.

---

## ⚙️ Instalación y Desarrollo

### 1. Clonar o ubicarse en el directorio

```powershell
cd C:\Users\Livi\OneDrive\Documentos\Portafolio\portfolio-next
```

### 2. Instalar dependencias

```powershell
npm install
```

### 3. Iniciar servidor de desarrollo

```powershell
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build de producción

```powershell
npm run build
npm run start
```

### 5. Linter

```powershell
npm run lint
```

---

## 🌗 Tema Claro / Oscuro

- **Configuración**: `tailwind.config.ts` con `darkMode: "class"`.
- **Provider**: `theme-provider.tsx` envuelve la aplicación con `next-themes`.
- **Toggle**: `theme-toggle.tsx` detecta la clase `dark` en `<html>` y la cambia.
- **Persistencia**: `next-themes` guarda la preferencia en `localStorage`.

### Cómo usar variantes dark en tus estilos:

```tsx
<div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
  ...
</div>
```

---

## 🧩 Componentes Principales

### `Navbar`
Barra de navegación fija con anclas a secciones y botón de tema.

### `ThemeToggle`
Botón que alterna entre claro/oscuro. Iconos controlados por CSS (`dark:hidden`, `dark:inline`).

### `ThemeProvider`
Envuelve la app y sincroniza tema con `next-themes`.

---

## 📝 Personalización

### Cambiar textos e información personal

1. Abre `src/app/page.tsx`.
2. Edita las secciones:
   - **Hero**: nombre, rol, descripción.
   - **Sobre mí**: biografía y highlights.
   - **Habilidades**: array de tecnologías.
   - **Proyectos**: datos de proyectos (título, descripción, enlaces).
   - **Experiencia**: roles y empresas.
   - **Contacto**: enlaces de email, LinkedIn y GitHub.

### Agregar imágenes propias

- Coloca tu foto en `public/avatar.png`.
- En `src/app/page.tsx`, cambia la ruta del `Image` del Hero:
  ```tsx
  <Image src="/avatar.png" alt="Tu nombre" ... />
  ```
- Para proyectos: agrega `public/proyecto1.png`, etc., y actualiza las rutas.

### Ajustar colores

Edita `src/app/layout.tsx` y `page.tsx` para cambiar las clases de Tailwind (ej: `bg-sky-600` → `bg-blue-600`).

---

## 🚢 Despliegue

### Vercel (recomendado)

1. Sube tu código a GitHub.
2. Conéctalo a [Vercel](https://vercel.com).
3. Vercel detectará Next.js automáticamente y desplegará.

O ejecuta:

```powershell
npx vercel
```

### Otros servicios

- **Netlify**: compatible con Next.js (requiere ajustes en build).
- **Railway / Fly.io**: para despliegues con Node.js.

---

## 🔧 Próximos Pasos

- [ ] Crear componentes para secciones (limpiar `page.tsx`).
- [ ] Cargar proyectos desde un JSON o array externo.
- [ ] Añadir formulario de contacto con validación (React Hook Form + Zod).
- [ ] Implementar animaciones (Framer Motion o scroll reveal).
- [ ] Mejorar SEO (meta tags, sitemap, robots.txt).
- [ ] Integrar Prisma + PostgreSQL para CMS de proyectos.
- [ ] Añadir testing (Vitest + Testing Library + Playwright).
- [ ] Analytics (Vercel Analytics o Google Analytics).

---

## 📜 Changelog / Historial de Actualizaciones

### [0.1.0] - 8 de noviembre de 2025

#### ✅ Inicial
- Migración desde HTML estático a Next.js + TypeScript + Tailwind.
- Estructura de App Router con layout y página principal.
- Secciones completas: Hero, Sobre mí, Habilidades, Proyectos, Experiencia, Contacto, Footer.
- Navbar fijo con anclas de navegación.
- Integración de `next-themes` para tema claro/oscuro.
- Configuración de `tailwind.config.ts` con `darkMode: "class"`.
- Componentes: `Navbar`, `ThemeProvider`, `ThemeToggle`.
- Imágenes: `favicon.svg`, `placeholder.svg`.
- Metadata y Open Graph configurados.
- Build sin errores ni advertencias.

#### 🐛 Correcciones
- Resuelto error de hidratación SSR/CSR en `ThemeToggle`.
- Eliminadas 7 advertencias de Tailwind (clases antiguas).
- Removidas variables CSS que bloqueaban estilos de Tailwind.
- Iconos de tema controlados por CSS (sin mismatches).

#### 📚 Documentación
- README completo con stack, estructura, instalación, personalización, despliegue y changelog.

---

## 📄 Licencia

Este proyecto es de uso personal. Si compartes el código públicamente, considera añadir una licencia (MIT, CC BY, etc.).

---

## 🤝 Contribuciones

Si tienes sugerencias o mejoras, abre un issue o pull request en tu repositorio.

---

## 📧 Contacto

**Bruno Rodrigo Alberto Hidalgo**  
- Email: [brunohidalgo763@gmail.com](mailto:brunohidalgo763@gmail.com)  
- LinkedIn: [linkedin.com/in/bruno-hidalgo-196017310](https://www.linkedin.com/in/bruno-hidalgo-196017310)  
- GitHub: [github.com/Livio763](https://github.com/Livio763)  
- WhatsApp: [+591 76320659](https://wa.me/59176320659)  

---

**Hecho con Next.js, React 19 y Tailwind CSS.**
