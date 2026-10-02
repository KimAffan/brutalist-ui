/* =====================================================
   BRUTALIST UI — Interactive Logic
   Vanilla JS, no dependencies
   ===================================================== */
(function () {
  "use strict";

  /* --------------------------------------------------
     1. THEME (Dark Mode Dinamis + LocalStorage)
     -------------------------------------------------- */
  const THEME_KEY = "brutalist-theme";

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  }
  function setStoredTheme(t) {
    try { localStorage.setItem(THEME_KEY, t); } catch {}
  }
  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-br-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", theme === "dark");
      const sun = btn.querySelector("[data-br-theme-icon='sun']");
      const moon = btn.querySelector("[data-br-theme-icon='moon']");
      if (sun && moon) {
        sun.style.display  = theme === "dark" ? "none" : "inline-flex";
        moon.style.display = theme === "dark" ? "inline-flex" : "none";
      }
    });
  }
  function initTheme() {
    const stored = getStoredTheme();
    const theme = stored || (systemPrefersDark() ? "dark" : "light");
    applyTheme(theme);
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    setStoredTheme(next);
  }

  /* --------------------------------------------------
     2. MODAL
     -------------------------------------------------- */
  function openModal(selector) {
    const modal = document.querySelector(selector);
    if (!modal) return;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    const focusable = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (focusable) focusable.focus();
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    if (!document.querySelector(".br-modal.is-open")) {
      document.body.style.overflow = "";
    }
  }
  function initModals() {
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-br-modal-open]");
      if (opener) {
        e.preventDefault();
        openModal(opener.getAttribute("data-br-modal-open"));
        return;
      }
      const closer = e.target.closest("[data-br-modal-close]");
      if (closer) {
        e.preventDefault();
        closeModal(closer.closest(".br-modal"));
        return;
      }
      // klik overlay untuk close
      if (e.target.classList.contains("br-modal__overlay")) {
        closeModal(e.target.closest(".br-modal"));
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".br-modal.is-open").forEach(closeModal);
      }
    });
  }

  /* --------------------------------------------------
     3. ACCORDION
     -------------------------------------------------- */
  function initAccordions() {
    document.addEventListener("click", (e) => {
      const header = e.target.closest(".br-accordion__header");
      if (!header) return;
      const item = header.closest(".br-accordion");
      const group = item.closest("[data-br-accordion-group]");
      if (group) {
        group.querySelectorAll(".br-accordion.is-open").forEach((el) => {
          if (el !== item) el.classList.remove("is-open");
        });
      }
      item.classList.toggle("is-open");
    });
  }

  /* --------------------------------------------------
     4. TABS
     -------------------------------------------------- */
  function initTabs() {
    document.addEventListener("click", (e) => {
      const tab = e.target.closest("[data-br-tab]");
      if (!tab) return;
      const tabsRoot = tab.closest(".br-tabs");
      if (!tabsRoot) return;
      const target = tab.getAttribute("data-br-tab");
      tabsRoot.querySelectorAll("[data-br-tab]").forEach((t) => t.classList.remove("is-active"));
      tabsRoot.querySelectorAll(".br-tabs__panel").forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      const panel = tabsRoot.querySelector(`[data-br-tab-panel="${target}"]`);
      if (panel) panel.classList.add("is-active");
    });
  }

  /* --------------------------------------------------
     5. DROPDOWN
     -------------------------------------------------- */
  function initDropdowns() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-br-dropdown-trigger]");
      if (trigger) {
        e.preventDefault();
        const root = trigger.closest(".br-dropdown");
        document.querySelectorAll(".br-dropdown.is-open").forEach((d) => {
          if (d !== root) d.classList.remove("is-open");
        });
        root.classList.toggle("is-open");
        return;
      }
      // klik di luar → tutup semua
      if (!e.target.closest(".br-dropdown__menu")) {
        document.querySelectorAll(".br-dropdown.is-open").forEach((d) => d.classList.remove("is-open"));
      }
    });
  }

  /* --------------------------------------------------
     6. ALERT DISMISS
     -------------------------------------------------- */
  function initAlerts() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-br-dismiss]");
      if (!btn) return;
      const alert = btn.closest(".br-alert");
      if (alert) {
        alert.style.transition = "opacity 150ms, transform 150ms";
        alert.style.opacity = "0";
        alert.style.transform = "translateX(20px)";
        setTimeout(() => alert.remove(), 160);
      }
    });
  }

  /* --------------------------------------------------
     7. TOAST
     -------------------------------------------------- */
  function ensureToastContainer() {
    let c = document.querySelector(".br-toast-container");
    if (!c) {
      c = document.createElement("div");
      c.className = "br-toast-container";
      document.body.appendChild(c);
    }
    return c;
  }
  function showToast(message, type = "info", duration = 3000) {
    const container = ensureToastContainer();
    const toast = document.createElement("div");
    toast.className = `br-toast br-toast--${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    if (duration > 0) {
      setTimeout(() => {
        toast.classList.add("is-leaving");
        setTimeout(() => toast.remove(), 200);
      }, duration);
    }
    return toast;
  }

  /* --------------------------------------------------
     8. AUTO-INIT & GLOBAL EXPOSURE
     -------------------------------------------------- */
  function init() {
    initTheme();
    initModals();
    initAccordions();
    initTabs();
    initDropdowns();
    initAlerts();

    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-br-theme-toggle]")) toggleTheme();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose API
  window.BrutalistUI = {
    openModal,
    closeModal,
    showToast,
    toggleTheme,
    applyTheme,
  };
})();