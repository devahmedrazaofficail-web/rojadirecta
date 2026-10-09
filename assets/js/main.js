/* ============================================================
   ROJA DIRECTA — main.js (vanilla JS, no dependencies)
   Schedule app: day tabs, filters, search, match modal.
   Also: mobile nav, FAQ accordion, back-to-top, contact form.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- mobile nav ---------- */
  const navToggle = $(".nav-toggle");
  const mainNav = $(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- FAQ accordion ---------- */
  $$(".faq-item").forEach((item) => {
    const q = $(".faq-q", item);
    const a = $(".faq-a", item);
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      $$(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        $(".faq-a", o).style.maxHeight = null;
        $(".faq-q", o).setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- back to top ---------- */
  const backTop = $(".back-top");
  if (backTop) {
    window.addEventListener("scroll", () => {
      backTop.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- schedule app ---------- */
  const app = $("#sched-app");
  if (!app || typeof FIXTURES === "undefined") return;

  const listEl = $("#match-list", app);
  const tabsEl = $("#day-tabs", app);
  const sportSel = $("#f-sport", app);
  const compSel = $("#f-comp", app);
  const searchIn = $("#f-search", app);
  const countEl = $("#sched-count", app);

  let state = { day: DAYS[0].id, sport: "all", comp: "all", q: "" };

  /* day tabs */
  DAYS.forEach((d) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "day-tab";
    b.textContent = d.short;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", d.id === state.day ? "true" : "false");
    b.dataset.day = d.id;
    b.addEventListener("click", () => {
      state.day = d.id; state.comp = "all";
      $$(".day-tab", tabsEl).forEach((t) =>
        t.setAttribute("aria-selected", t.dataset.day === d.id ? "true" : "false"));
      buildCompOptions();
      render();
    });
    tabsEl.appendChild(b);
  });

  /* sport filter */
  function buildSportOptions() {
    const sports = [];
    Object.keys(FIXTURES).forEach((day) => {
      sportsFor(day).forEach((s) => { if (!sports.includes(s)) sports.push(s); });
    });
    sportSel.innerHTML = '<option value="all">Todos los deportes</option>';
    sports.forEach((s) => {
      const o = document.createElement("option");
      o.value = s; o.textContent = SPORT_ICON[s] + " " + SPORT_NAME[s];
      sportSel.appendChild(o);
    });
  }

  /* competition filter (per day) */
  function buildCompOptions() {
    compSel.innerHTML = '<option value="all">Todas las competiciones</option>';
    compsFor(state.day).forEach((c) => {
      const o = document.createElement("option");
      o.value = c; o.textContent = c;
      compSel.appendChild(o);
    });
    compSel.value = "all";
  }

  sportSel.addEventListener("change", () => { state.sport = sportSel.value; render(); });
  compSel.addEventListener("change", () => { state.comp = compSel.value; render(); });
  let searchT;
  searchIn.addEventListener("input", () => {
    clearTimeout(searchT);
    searchT = setTimeout(() => { state.q = searchIn.value.trim().toLowerCase(); render(); }, 180);
  });

  function filtered() {
    return (FIXTURES[state.day] || []).filter((m) => {
      if (state.sport !== "all" && m.s !== state.sport) return false;
      if (state.comp !== "all" && m.c !== state.comp) return false;
      if (state.q) {
        const hay = (m.h + " " + m.a + " " + m.c).toLowerCase();
        if (!hay.includes(state.q)) return false;
      }
      return true;
    });
  }

  function render() {
    const items = filtered().slice().sort((a, b) => a.t.localeCompare(b.t));
    listEl.innerHTML = "";
    if (!items.length) {
      listEl.innerHTML = '<li class="no-results">No hay eventos con esos filtros. Prueba con otro día o competición.</li>';
    } else {
      let lastComp = null;
      items.forEach((m) => {
        if (m.c !== lastComp) {
          const sep = document.createElement("li");
          sep.className = "comp-sep";
          sep.textContent = m.c;
          sep.setAttribute("aria-hidden", "true");
          listEl.appendChild(sep);
          lastComp = m.c;
        }
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "match";
        btn.setAttribute("aria-label", m.h + " contra " + m.a + ", " + m.c + ", " + m.t);
        btn.innerHTML =
          "<time>" + m.t + "</time>" +
          '<span class="sport" aria-hidden="true">' + (SPORT_ICON[m.s] || "⚽") + "</span>" +
          '<span class="teams"><span class="comp">' + escapeHtml(m.c) + "</span>" +
          '<span class="names">' + escapeHtml(m.h) + " vs " + escapeHtml(m.a) + "</span></span>" +
          '<span class="go" aria-hidden="true">›</span>';
        btn.addEventListener("click", () => openModal(m));
        li.appendChild(btn);
        listEl.appendChild(li);
      });
    }
    const n = items.length;
    countEl.textContent = n + (n === 1 ? " evento" : " eventos") + " · hora peninsular (CEST)";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---------- match modal ---------- */
  const back = $("#modal-back");
  const modal = $("#modal");
  const mTitle = $("#m-title");
  const mBody = $("#m-body");
  const mClose = $("#m-close");
  let lastFocus = null;

  function openModal(m) {
    lastFocus = document.activeElement;
    const dayLabel = DAYS.find((d) => d.id === state.day).label;
    mTitle.textContent = m.h + " vs " + m.a;
    const site = COMP_SITE[m.c];
    mBody.innerHTML =
      '<dl class="kv">' +
      "<dt>Competición</dt><dd>" + escapeHtml(m.c) + "</dd>" +
      "<dt>Fecha</dt><dd>" + dayLabel + " de 2026</dd>" +
      "<dt>Hora</dt><dd>" + m.t + " (hora peninsular española)" + (m.approx ? " · aproximada" : "") + "</dd>" +
      "<dt>Deporte</dt><dd>" + (SPORT_ICON[m.s] || "") + " " + (SPORT_NAME[m.s] || "") + "</dd>" +
      (m.v ? "<dt>Lugar</dt><dd>" + escapeHtml(m.v) + "</dd>" : "") +
      "</dl>" +
      '<div class="modal-note"><strong>¿Dónde verlo?</strong> Roja Directa es una guía informativa: no alojamos ni enlazamos retransmisiones. ' +
      "Consulta la programación oficial de la competición" +
      (site ? ' (<a href="' + site + '" target="_blank" rel="noopener">web oficial</a>)' : "") +
      " o tu operador de TV para saber qué canal lo emite en España.</div>";
    back.classList.add("open");
    document.body.style.overflow = "hidden";
    mClose.focus();
  }
  function closeModal() {
    back.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  if (back) {
    mClose.addEventListener("click", closeModal);
    back.addEventListener("click", (e) => { if (e.target === back) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && back.classList.contains("open")) closeModal();
    });
  }

  buildSportOptions();
  buildCompOptions();
  render();

  /* ---------- contact form (front-end validation only) ---------- */
  const form = $("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      $$(".field", form).forEach((f) => f.classList.remove("invalid"));
      const name = $("#cf-name"), email = $("#cf-email"), msg = $("#cf-msg");
      if (!name.value.trim()) { fieldError(name); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { fieldError(email); ok = false; }
      if (msg.value.trim().length < 10) { fieldError(msg); ok = false; }
      if (!ok) return;
      /* Static site: no backend. Connect Formspree (see README) to receive messages. */
      $("#form-ok").style.display = "block";
      form.reset();
      setTimeout(() => { $("#form-ok").style.display = "none"; }, 8000);
    });
    function fieldError(input) {
      input.closest(".field").classList.add("invalid");
    }
  }
})();
