# Bearspaw - Sitio Web de Senior Living

Aplicacion web para presentar la oferta de `Bearspaw`, una comunidad de `senior living`, con enfoque en:

- filosofia de cuidado (Safety, Nature, Legacy),
- servicios (Assisted Living, Memory Care, Wellness Programs, Social Activities),
- experiencia de comunidad (Testimonials, Community Life),
- y contacto para agendar visitas.

El proyecto esta construido como SPA con rutas en ingles y redirecciones desde rutas legacy en espanol para mantener compatibilidad.

## Tecnologias principales

- `React 18` + `TypeScript`
- `Vite 5` para desarrollo y build
- `React Router` para navegacion y rutas
- `Tailwind CSS` para estilos utilitarios
- `shadcn/ui` + `Radix UI` para componentes de interfaz
- `Framer Motion` para animaciones
- `TanStack Query` para estado asincrono y data fetching
- `Vitest` + `Testing Library` para pruebas
- `ESLint` para calidad de codigo

## Estructura del proyecto

```txt
src/
  components/        # Componentes reutilizables y secciones de pagina
  components/ui/     # Componentes base de UI (shadcn/ui)
  pages/             # Paginas/rutas de la aplicacion
  hooks/             # Hooks personalizados
  lib/               # Utilidades compartidas
  test/              # Configuracion y pruebas
```

## Rutas principales

- `/`
- `/safety`
- `/nature`
- `/legacy`
- `/assisted-living`
- `/memory-care`
- `/wellness-programs`
- `/social-activities`
- `/testimonials`
- `/community-life`
- `/contact`

Tambien existen redirecciones desde rutas en espanol, por ejemplo:
`/seguridad`, `/naturaleza`, `/legado`, `/testimonios`, `/vida-en-comunidad`, `/contacto`.

## Requisitos

- `Node.js` 18 o superior
- `npm` (incluido normalmente con Node.js)

## Instalacion y ejecucion local

```bash
git clone <tu-repositorio>
cd bearspaw
npm install
npm run dev
```

La app quedara disponible en `http://localhost:5173`.

## Scripts disponibles

- `npm run dev`: inicia entorno de desarrollo
- `npm run build`: build de produccion
- `npm run build:dev`: build en modo development
- `npm run preview`: previsualiza el build local
- `npm run lint`: ejecuta linting con ESLint
- `npm run test`: ejecuta pruebas una vez
- `npm run test:watch`: ejecuta pruebas en modo watch

## Notas de mantenimiento

- La navegacion principal se gestiona en `src/components/Navbar.tsx`.
- Las rutas de la app se definen en `src/App.tsx`.
- La composicion de la home se encuentra en `src/pages/Index.tsx`.
