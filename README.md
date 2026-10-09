# Roja Directa — Programación deportiva

Sitio estático (HTML + CSS + JavaScript vanilla, sin frameworks, sin backend) con la
programación deportiva diaria: partidos de fútbol, baloncesto, Fórmula 1, MotoGP y más,
con horarios en hora peninsular española.

## Estructura

```
/
├── index.html            # Inicio: programación de hoy + contenido SEO + FAQ
├── programacion.html     # Programación completa (3 días) con filtros
├── ligas.html            # Ficha de cada competición
├── guia.html             # Guía TV: cómo seguir los partidos en España
├── faq.html              # Preguntas frecuentes
├── contacto.html         # Formulario de contacto
├── aviso-legal.html      # Aviso legal
├── privacidad.html       # Política de privacidad
├── 404.html              # Página de error
├── robots.txt
├── sitemap.xml
├── vercel.json           # cleanUrls para URLs limpias en Vercel
└── assets/
    ├── css/style.css     # Sistema de diseño completo
    ├── js/fixtures.js    # DATOS: edita aquí los partidos
    └── js/main.js         # Lógica: pestañas, filtros, buscador, modal, FAQ
    └── img/              # hero-estadio.jpg, og-portada.jpg (originales)
```

## Despliegue en Vercel (5 minutos)

1. Sube esta carpeta a un repositorio de GitHub (o GitLab/Bitbucket).
2. En [vercel.com](https://vercel.com) pulsa **Add New → Project** e importa el repositorio.
3. **No pongas ningún Build Command** (déjalo vacío). Output Directory: déjalo como está.
4. Pulsa **Deploy**. Listo: el sitio es 100 % estático.
5. Para un dominio propio: Project → Settings → Domains → añade tu dominio y
   sigue las instrucciones de DNS de Vercel.

> **IMPORTANTE — dominio:** todos los `canonical`, Open Graph y `sitemap.xml`
> usan el dominio provisional `https://roja-directa.vercel.app`.
> Cuando tengas tu dominio definitivo, haz un buscar/reemplazar de
> `roja-directa.vercel.app` por tu dominio en todos los archivos.

## Actualizar los partidos (cada semana)

Toda la programación vive en **`assets/js/fixtures.js`**:

- `DAYS`: los 3 días que muestran las pestañas (id `YYYY-MM-DD`, etiqueta).
- `FIXTURES`: arrays por día. Cada partido: `{ t:"21:00", s:"futbol", c:"LaLiga",
  h:"Real Madrid", a:"Villarreal", v:"Estadio (opcional)", approx:true (opcional) }`.
  - `t`: hora en **hora peninsular española** (formato 24h).
  - `s`: deporte (`futbol`, `baloncesto`, `f1`, `motogp`, `tenis`, `hockey`, `boxeo`, `mma`).
  - `c`: competición (debe coincidir con una clave de `COMP_SITE` para el enlace oficial).
- `COMP_SITE`: webs oficiales de cada competición (solo enlaces informativos).

Guarda el archivo y vuelve a desplegar (Vercel lo hace solo al hacer push a Git).

## Formulario de contacto

`contacto.html` valida los campos en el navegador, pero al ser un sitio estático
**no envía el mensaje a ningún sitio** por sí solo. Para recibir mensajes:

1. Crea una cuenta gratuita en [Formspree](https://formspree.io) y obtén tu endpoint.
2. En `contacto.html`, cambia `<form id="contact-form" ...>` para que apunte a tu
   endpoint, o sigue la guía de Formspree para AJAX y adapta el handler de
   `main.js` (busca el comentario `/* Static site: no backend`).

## Notas

- **Aviso legal:** el sitio es una guía informativa. No aloja, emite ni enlaza
  retransmisiones (ver `aviso-legal.html`).
- Los horarios de la clasificación UEFA del fin de semana del 10–12 oct 2026
  están marcados como aproximados en `fixtures.js` (`approx:true`): la fuente
  no aclaraba el huso horario. Verifícalos con la web oficial de la UEFA.
- Rendimiento: sin librerías externas, imágenes optimizadas, `fetchpriority`
  en la imagen principal. Sin promesas de puntuación: mídelo con PageSpeed
  Insights tras desplegar.
