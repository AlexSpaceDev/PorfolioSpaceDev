# 🌌 Space DEV - Sitio Web Oficial

Donde las ideas despegan 🚀

Este repositorio contiene el sitio web oficial de Space DEV, un estudio creativo enfocado en el desarrollo de páginas web, aplicaciones, videojuegos, ar/vr y otros.

La web fue construida priorizando rendimiento, estructura escalable y experiencia de usuario, siguiendo una arquitectura moderna basada en componentes.

---

## 🚀 Stack Tecnológico
- ⚡ Astro — Renderizado híbrido y performance optimizado
- ⚛️ React — Componentes interactivos
- 🎨 TailwindCSS — Sistema de diseño utilitario
- 🟦 TypeScript — Tipado estático y mayor robustez
- 📩 Resend — Envío de emails desde el formulario de contacto
- 🛰 Astro Server Actions — Backend ligero integrado en el proyecto
- 🌐 Hostinger (deploy con dominio propio)

---

## ✨ Características Principales
- Landing page optimizada para conversión
- Sección de proyectos dinámica
- Componentes reutilizables y modulares
- Efectos visuales personalizados (glitch, noise, ambientación espacial)
- Formulario de contacto funcional con envío real de correos
- Diseño responsive y optimizado para dispositivos móviles
- Enfoque en rendimiento y buenas prácticas

---

## 📦 Instalación y uso

Clona el repositorio:

```bash
git clone https://github.com/AlexSpaceDev/PorfolioSpaceDev.git
cd PorfolioSpaceDev
npm install
```
Inicia el servidor local de desarrollo:

```bash
npm run dev

```
Crea una build de producción:

```bash
npm run build
```

Haz una vista previa de la build:

```bash
npm run preview
```
---

## 🔐 Variables de entorno
Para que el formulario de contacto funcione correctamente, debes crear un archivo .env en la raíz del proyecto con:
```bash
RESEND_API_KEY=tu_api_key_aqui
CONTACT_EMAIL=correo_destino@tudominio.com

```
---

## 📂 Estructura del proyecto

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/                # Archivos estáticos
├── src/
│   ├── components/        # Componentes React y Astro
│   ├── layouts/           # Layouts base
│   ├── pages/             # Rutas del sitio
│   ├── styles/            # Configuración global y estilos
│   └── actions/           # Server Actions (formulario, etc.)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json

```

## 🌍 Deploy
El proyecto está preparado para deploy en entornos compatibles con Astro (Node o adaptadores).
Puede desplegarse en servicios como:

- Vercel
- Netlify
- Hostinger (Node compatible)
- Servidores VPS

## 📖 Notas
El sitio no es solo una vitrina, es una declaración de identidad:
- Diseño con intención
- Código estructurado y escalable
- Estética espacial como narrativa visual
- Tecnología moderna aplicada con propósito

## ✍️ Autor: Space DEV
🌌 https://spacedev.me

