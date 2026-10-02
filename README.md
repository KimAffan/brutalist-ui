# Brutalist UI

Library komponen UI **Neo-Brutalism** yang ringan, tanpa dependencies, dan mendukung **dark mode dinamis**. Dibuat dengan HTML, CSS, dan Vanilla JavaScript murni — tinggal copy-paste, langsung pakai.

[![Version](https://img.shields.io/badge/version-1.0.0-4ECDC4?style=flat-square)](https://github.com/kimaffan/brutalist-ui)
[![License](https://img.shields.io/badge/license-MIT-FFD93D?style=flat-square)](LICENSE)
[![Made with](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-FF6B6B?style=flat-square)](#)

---

## 🖼️ Preview

**Light Mode**

![Brutalist UI — Light Mode](assets/img/Home-Light.png)

**Dark Mode**

![Brutalist UI — Dark Mode](assets/img/Home-Dark.png)

---

## ✨ Fitur

- 🎨 **Neo-Brutalism** — border tebal, hard shadow, warna kontras
- 🌗 **Dark mode dinamis** — auto-detect preferensi sistem + localStorage
- 📦 **Tanpa dependencies** — murni HTML, CSS, Vanilla JS
- 🧩 **20+ komponen** siap pakai
- ⚡ **Ringan** — CSS & JS di bawah 30KB
- 📱 **Responsif** — mobile-friendly
- ♿ **Aksesibel** — `aria-*`, `focus-visible`, `prefers-reduced-motion`
- 🎛️ **Design token** — semua warna di CSS variables, gampang di-custom

---

## 📁 Struktur Folder

```
brutalist-ui/
├── index.html              # Halaman showcase & dokumentasi
├── css/
│   ├── brutalist.css       # ⭐ Library CSS (yang kamu pakai)
│   └── demo.css            # CSS khusus halaman showcase
├── js/
│   ├── brutalist.js        # ⭐ Library JS (yang kamu pakai)
│   └── demo.js             # JS khusus halaman showcase
└── assets/
    └── img/                # Screenshot untuk dokumentasi
```

> 💡 Untuk dipakai di proyekmu, kamu **hanya butuh** `css/brutalist.css` dan `js/brutalist.js`.

---

## 🚀 Cara Pakai

### 1. Download atau Clone

```bash
git clone https://github.com/kimaffan/brutalist-ui.git
```

Atau download ZIP-nya, lalu copy folder `css/` dan `js/` ke proyekmu.

### 2. Import di HTML

```html
<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Proyek Saya</title>

  <!-- Font (opsional, tapi direkomendasikan) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">

  <!-- Brutalist UI CSS -->
  <link rel="stylesheet" href="css/brutalist.css" />
</head>
<body>

  <!-- Konten di sini -->

  <!-- Brutalist UI JS -->
  <script src="js/brutalist.js"></script>
</body>
</html>
```

### 3. Pakai Komponen

```html
<!-- Tombol -->
<button class="br-btn br-btn--primary">Klik Saya</button>

<!-- Card -->
<div class="br-card">
  <div class="br-card__header">Judul</div>
  <div class="br-card__body">Isi kartu.</div>
</div>

<!-- Badge -->
<span class="br-badge br-badge--success">Aktif</span>
```

---

## 🧩 Daftar Komponen

| # | Komponen | Class Utama |
|---|----------|-------------|
| 1 | Button | `.br-btn`, `.br-btn--primary`, `.br-btn--secondary`, `.br-btn--danger`, `.br-btn--success`, `.br-btn--info`, `.br-btn--ghost`, `.br-btn--inverted` |
| 2 | Card | `.br-card`, `.br-card--hover`, `.br-card__header`, `.br-card__body`, `.br-card__footer` |
| 3 | Input | `.br-input`, `.br-input--error` |
| 4 | Textarea | `.br-textarea` |
| 5 | Select | `.br-select` |
| 6 | Checkbox / Radio | `.br-check`, `.br-check__box` |
| 7 | Switch | `.br-switch`, `.br-switch__track`, `.br-switch__thumb` |
| 8 | Badge | `.br-badge`, `.br-badge--primary`, dll |
| 9 | Alert | `.br-alert`, `.br-alert--info`, `.br-alert--success`, `.br-alert--warning`, `.br-alert--danger` |
| 10 | Modal | `.br-modal`, `.br-modal__dialog`, `.br-modal__overlay` |
| 11 | Accordion | `.br-accordion`, `.br-accordion__header`, `.br-accordion__body` |
| 12 | Tabs | `.br-tabs`, `.br-tabs__nav`, `.br-tab`, `.br-tabs__panel` |
| 13 | Progress | `.br-progress`, `.br-progress__bar` |
| 14 | Avatar | `.br-avatar`, `.br-avatar--sm`, `.br-avatar--lg`, `.br-avatar--circle` |
| 15 | Table | `.br-table` |
| 16 | Dropdown | `.br-dropdown`, `.br-dropdown__menu`, `.br-dropdown__item` |
| 17 | Toast | `.br-toast`, `.br-toast--success`, dll |
| 18 | Tooltip | `.br-tooltip`, `.br-tooltip__text` |
| 19 | Breadcrumb | `.br-breadcrumb`, `.br-breadcrumb__item` |
| 20 | Skeleton | `.br-skeleton` |
| 21 | Divider | `.br-divider` |

---

## 🎨 Kustomisasi Warna

Semua warna disimpan sebagai CSS variables. Ubah satu variabel, seluruh tema ikut berubah.

```css
:root {
  --br-primary:      #4ECDC4;
  --br-secondary:    #FFD93D;
  --br-danger:       #FF6B6B;
  --br-success:      #95E1A3;
  --br-info:         #A8D8FF;
  --br-bg:           #F5F1E8;
  --br-text:         #1A1A1A;
  --br-border:       #1A1A1A;
  --br-shadow-color: #1A1A1A;
  --br-bw:           3px;    /* border width */
}
```

---

## 🌗 Dark Mode

Dark mode otomatis aktif kalau:

1. User belum pernah pilih tema → ikut preferensi sistem operasi.
2. User pernah klik tombol toggle → pilihan disimpan di `localStorage`.

Tambahkan tombol toggle di HTML:

```html
<button class="br-btn br-btn--sm" data-br-theme-toggle aria-pressed="false">
  <span data-br-theme-icon="sun">☀ Light</span>
  <span data-br-theme-icon="moon" style="display:none;">☾ Dark</span>
</button>
```

Atau kontrol via JavaScript:

```js
BrutalistUI.toggleTheme();
BrutalistUI.applyTheme('dark');  // 'light' | 'dark'
```

---

## ⚙️ JavaScript API

Setelah `brutalist.js` di-load, API tersedia di `window.BrutalistUI`:

```js
// Modal
BrutalistUI.openModal('#myModal');
BrutalistUI.closeModal(document.querySelector('#myModal'));

// Toast
BrutalistUI.showToast('Berhasil disimpan!', 'success', 3000);
// Tipe: 'success' | 'danger' | 'info' | 'warning'
// Duration dalam ms; 0 = tidak auto dismiss

// Theme
BrutalistUI.toggleTheme();
BrutalistUI.applyTheme('dark');
```

### Data Attributes

| Atribut | Fungsi |
|---|---|
| `data-br-modal-open="#selector"` | Buka modal |
| `data-br-modal-close` | Tutup modal |
| `data-br-theme-toggle` | Toggle dark/light mode |
| `data-br-dropdown-trigger` | Buka/tutup dropdown |
| `data-br-tab="id"` | Aktifkan tab |
| `data-br-tab-panel="id"` | Panel tab yang sesuai |
| `data-br-dismiss` | Tutup alert |
| `data-br-accordion-group` | Bikin accordion single-open |

---

## 💻 Live Demo

Buka `index.html` di browser, atau jalankan via Live Server:

```bash
# Kalau pakai VS Code, install ekstensi "Live Server"
# lalu klik kanan index.html → "Open with Live Server"
```

Demo online: **https://kimaffan.github.io/brutalist-ui/**

---

## 🌐 Browser Support

| Browser | Versi |
|---|---|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |

---

## 📝 Lisensi

MIT License — bebas dipakai untuk proyek pribadi maupun komersial.

---

## 👤 Author

**Khadhor Iksan M. M.**

- GitHub: [@kimaffan](https://github.com/kimaffan)
- Portofolio: [kimaffan.github.io/portofolio](https://kimaffan.github.io/portofolio)

---

⭐ Kalau library ini berguna, kasih star di GitHub!
