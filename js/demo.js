/* =====================================================
   DEMO / SHOWCASE LOGIC
   ===================================================== */
(function () {
  "use strict";

  /* — Copy to clipboard — */
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const codeBlock = btn.closest(".demo-code");
    const code = codeBlock ? codeBlock.querySelector("code") : null;
    if (!code) return;

    const text = code.innerText;
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.textContent;
      btn.textContent = "COPIED!";
      btn.style.background = "var(--br-success)";
      btn.style.color = "#1A1A1A";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "";
        btn.style.color = "";
      }, 1200);
    } catch {
      window.BrutalistUI && window.BrutalistUI.showToast("Gagal copy", "danger");
    }
  });

  /* — Active nav highlight on scroll — */
  const sections = document.querySelectorAll(".demo-section[id]");
  const navLinks = document.querySelectorAll(".demo-sidebar__nav a");

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((a) => {
              a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* — Smooth scroll — */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();