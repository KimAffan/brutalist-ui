/* =====================================================
   DEMO / SHOWCASE LOGIC
   ===================================================== */
(function () {
  "use strict";

  /* -------------------------------------------------
     1. AUTO-WRAP code block — biar tombol Copy tidak
        ikut scroll saat kode di-scroll horizontal.
     ------------------------------------------------- */
  (function wrapCodeBlocks() {
    document.querySelectorAll(".demo-code").forEach((pre) => {
      // Skip kalau sudah dibungkus
      if (pre.parentElement.classList.contains("demo-code-wrap")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "demo-code-wrap";

      // Ambil tombol Copy dari dalam <pre>
      const copyBtn = pre.querySelector(".demo-code__copy");
      if (copyBtn) pre.removeChild(copyBtn);

      // Sisipkan wrapper di posisi <pre>, lalu pindahkan <pre> + button ke dalamnya
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      if (copyBtn) wrapper.appendChild(copyBtn);
    });
  })();

  /* -------------------------------------------------
     2. Copy to clipboard
     ------------------------------------------------- */
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;

    // Cari code di wrapper (parent tombol), fallback ke .demo-code
    const wrapper = btn.closest(".demo-code-wrap") || btn.parentElement;
    const code = wrapper ? wrapper.querySelector("code") : null;
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
      if (window.BrutalistUI) {
        window.BrutalistUI.showToast("Gagal copy", "danger");
      }
    }
  });

  /* -------------------------------------------------
     3. Active nav highlight on scroll
     ------------------------------------------------- */
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

  /* -------------------------------------------------
     4. Smooth scroll
     ------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
