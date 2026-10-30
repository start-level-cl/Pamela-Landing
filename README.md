# Pamela Moya Arquitecta - Landing

One Page de Pamela Moya, arquitecta: regularizaciones (Ley N.º 20.898, SEREMI de Salud, restaurantes) y proyectos de arquitectura. Construida con Astro SSG, TypeScript, Tailwind CSS y `pnpm`, sin backend ni base de datos.

URL actual: https://pamela-landing.j-a-garcia13m.workers.dev/

## Secciones

| Ancla | Propósito |
| :--- | :--- |
| `#inicio` | Hero con identidad de marca y acceso directo a WhatsApp. |
| `#servicios` | Servicios de regularización con consulta prellenada por WhatsApp. |
| `#proposito` | Propuesta de valor y contacto. |
| `#contacto` | Formulario asistido que genera un mensaje de WhatsApp; no almacena datos. |

## Desarrollo

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

El build estático se genera en `dist/`.

## Despliegue

* **Cloudflare Workers** (static assets) mediante Workers Builds conectado a `main`: build `pnpm build`, deploy `npx wrangler deploy`. La configuración del Worker vive en `wrangler.jsonc`.
* **GitHub Actions** (`.github/workflows/ci.yml`) actúa como quality gate con `pnpm check` y `pnpm build`; no despliega.

## Pendientes

* dominio personalizado y URL canónica definitiva;
* `noindex` mientras el sitio se sirva desde `workers.dev`, `robots.txt`, sitemap y página 404 propia;
* migración a Astro 7 y Tailwind CSS 4 con configuración central del sitio.
