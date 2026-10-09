# Informe SEO — Roja Directa

**Fecha:** 10 de octubre de 2026 · **Dominio provisional:** `https://rojadirecta.vercel.app`
(⚠️ reemplazar por el dominio definitivo en canonicals, Open Graph y `sitemap.xml` antes de lanzar)

## 1. Estrategia

- **Keyword principal:** `roja directa` (también nombre de marca).
- **País objetivo:** España · **Idioma:** es · **Huso horario:** Europe/Madrid (CEST).
- **Nicho:** guía de programación deportiva (partidos, horarios, competiciones).
- **Enfoque:** la home ataca la intención "partidos de hoy / horarios"; `/programacion`
  la intención de agenda del fin de semana; `/ligas`, `/guia` y `/faq` capturan
  long-tail informativo. Sin keyword stuffing: la densidad se mantiene en rango
  de forma natural porque la marca coincide con la keyword.

## 2. Densidad de la keyword principal (home)

- Palabras analizadas (contenido principal, encabezados incluidos): **741**
- Apariciones exactas de "roja directa": **5**
- Densidad: **5 ÷ 741 × 100 = 0,675 %** ✅ (objetivo 0,4 %–0,7 %)
- Nota: el nombre de marca aparece además en header/footer/nav (boilerplate del
  sitio); el cálculo se hace sobre el contenido principal, según la metodología
  del proyecto. No se garantiza que ninguna densidad mejore el ranking.

## 3. On-page SEO (todas las páginas)

| Elemento | Estado |
|---|---|
| Título SEO único por página | ✅ 9/9 |
| Meta description única | ✅ 8/8 (404 excluida) |
| Canonical absoluta | ✅ 8/8 (404: noindex, sin canonical) |
| `lang="es"`, robots index/follow | ✅ |
| Open Graph + Twitter Cards | ✅ (imagen OG original `og-portada.jpg`) |
| Un solo H1 por página | ✅ 9/9 |
| Jerarquía H2/H3 lógica | ✅ |
| URLs limpias (`vercel.json` cleanUrls) | ✅ |
| robots.txt + sitemap.xml (8 URLs) | ✅ |
| Textos alternativos en imágenes | ✅ (hero con `alt=""` decorativa + fetchpriority) |
| Enlaces internos descriptivos, sin rotos | ✅ verificado por script |

## 4. Schema markup (JSON-LD válido, verificado)

- `index`: WebSite, Organization, WebPage, BreadcrumbList, **FAQPage** (5 Q&A),
  **ItemList** con 8 `SportsEvent` (partidos reales visibles en la agenda).
- `programacion`: WebPage + BreadcrumbList.
- `faq`: FAQPage con las 10 preguntas visibles (verificación 10/10).
- Resto: WebPage + BreadcrumbList. Sin datos inventados: sin ratings, precios
  ni direcciones ficticias.

## 5. Datos de programación

- **139 eventos reales** (10–12 oct 2026) verificados con fuentes deportivas
  actuales: LaLiga, Premier League, Serie A, Bundesliga, Ligue 1, Eredivisie,
  Championship, Saudi Pro League, Liga MX, Liga Profesional, clasificación
  mundialista UEFA, NBA pretemporada, NHL, F1 (GP Singapur), MotoGP, boxeo, UFC.
- Horarios convertidos a **hora peninsular (CEST)**. Los de la clasificación
  UEFA llevan marca `approx:true` (la fuente no aclaraba el huso) — la ficha
  del partido lo indica y se recomienda confirmar en la web oficial.
- Actualización semanal: editar `assets/js/fixtures.js` (ver README).

## 6. Rendimiento y accesibilidad

- Cero frameworks/librerías; CSS+JS propios (~22 KB); 2 imágenes JPG originales.
- Sin medición PageSpeed realizada (medir tras desplegar; sin promesas de nota).
- Accesibilidad: skip-link, modal con `role="dialog"` + Escape, acordeón FAQ con
  `aria-expanded`, focos visibles, `prefers-reduced-motion` respetado, botones
  táctiles ≥44 px.

## 7. Mejoras de UI/UX aplicadas

1. Identidad visual propia (navy + cyan + ámbar) en lugar del rojo/negro del referente.
2. Pestañas por día + filtros por deporte/competición + buscador instantáneo.
3. Ficha de partido en modal accesible con sede y enlace a la web oficial.
4. Agrupación visual por competición dentro de cada día.
5. FAQ en acordeón, back-to-top, navegación móvil con hamburguesa.
6. Página de ligas con fichas por competición; guía TV legal; aviso legal con
   descargo expreso.

## 8. Temas pendientes (decisiones del propietario)

1. **Dominio definitivo:** reemplazar `rojadirecta.vercel.app` en todos los archivos.
2. **Formulario de contacto:** conectar Formspree (ver README) para recibir mensajes.
3. **Agenda semanal:** actualizar `fixtures.js` cada semana (los datos son del 10–12 oct 2026).
4. **Horarios UEFA aproximados:** confirmar con la web oficial de la UEFA.
5. **Derechos TV** (guia.html): la reparto Movistar+/DAZN cambia por temporadas; reconfirmar.
6. Medir PageSpeed Insights tras el despliegue.
