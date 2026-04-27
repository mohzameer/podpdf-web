---
title: "HTML to PDF Conversion at PodPDF"
description: "Learn how PodPDF converts HTML to pixel-perfect PDFs using a modern browser engine — supporting full CSS, JavaScript-rendered content, custom fonts, and precise layout control."
publishedDate: 2026-04-20
author: "PodPDF Team"
tags: ["HTML", "PDF", "conversion", "CSS", "API"]
draft: false
---

HTML is the most expressive format for defining document layouts — you have the full power of CSS for typography, positioning, color, and responsive design. PodPDF renders HTML to PDF using a modern headless browser engine, which means if it works in Chrome, it works in PodPDF.

## How HTML-to-PDF Rendering Works at PodPDF

When you submit HTML to PodPDF, the rendering pipeline:

1. **Loads the HTML** in a headless browser context
2. **Fetches all external resources** — stylesheets, fonts, images, scripts
3. **Executes JavaScript** if present (useful for chart libraries, dynamic content)
4. **Applies print CSS** — `@media print` rules are respected
5. **Renders to PDF** using the browser's built-in print engine with your specified options

This approach means you get browser-grade rendering fidelity — not an approximation.

## What's Supported

### CSS

Full modern CSS is supported:

- Flexbox and CSS Grid layouts
- CSS custom properties (variables)
- CSS transforms and positioning
- `@font-face` (custom fonts via URL)
- `@media print` rules
- CSS page break controls (`break-before`, `break-after`, `break-inside`)
- `page-break-avoid` for keeping elements together

### JavaScript

JavaScript is executed before rendering. This means you can use:

- Chart libraries (Chart.js, D3, etc.)
- Dynamic content generation
- Data formatting libraries
- Any code that modifies the DOM before printing

### External Resources

Images, stylesheets, and fonts loaded via HTTPS URLs are fetched and embedded during rendering. This includes Google Fonts, CDN-hosted CSS frameworks (Tailwind, Bootstrap), and hosted images.

## API Usage

### Inline HTML

```bash
curl -X POST https://api.podpdf.com/v1/convert \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "html": "<!DOCTYPE html><html><head><style>body { font-family: Georgia, serif; } h1 { color: #1a1a2e; }</style></head><body><h1>Quarterly Report</h1><p>Revenue: $1.2M</p></body></html>",
    "options": {
      "format": "A4",
      "margin": { "top": "20mm", "bottom": "20mm", "left": "25mm", "right": "25mm" }
    }
  }'
```

### With a URL

Convert any publicly accessible URL directly to PDF:

```bash
curl -X POST https://api.podpdf.com/v1/convert \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/report",
    "options": {
      "format": "A4",
      "waitForSelector": "#content-loaded"
    }
  }'
```

The `waitForSelector` option tells PodPDF to wait until a specific DOM element exists before rendering — useful for JavaScript-rendered content.

## PDF Options Reference

### Page format

```json
{
  "options": {
    "format": "A4",
    "landscape": false
  }
}
```

Supported formats: `A4`, `A3`, `A5`, `Letter`, `Legal`, `Tabloid`.

### Custom page size

```json
{
  "options": {
    "width": "210mm",
    "height": "297mm"
  }
}
```

### Margins

```json
{
  "options": {
    "margin": {
      "top": "20mm",
      "right": "15mm",
      "bottom": "20mm",
      "left": "15mm"
    }
  }
}
```

### Headers and footers

```json
{
  "options": {
    "displayHeaderFooter": true,
    "headerTemplate": "<div style='width:100%; text-align:center; font-size:10px; color:#666;'>Confidential</div>",
    "footerTemplate": "<div style='width:100%; text-align:right; font-size:10px; color:#666; padding-right:20px;'>Page <span class='pageNumber'></span> of <span class='totalPages'></span></div>"
  }
}
```

The classes `pageNumber`, `totalPages`, `date`, `title`, and `url` are automatically substituted in header/footer templates.

### Background graphics

By default, CSS backgrounds are included. You can disable them:

```json
{
  "options": {
    "printBackground": false
  }
}
```

## Controlling Page Breaks in CSS

Use CSS page break properties to control how your content paginates:

```css
/* Keep a heading with the content that follows it */
h2, h3 {
  break-after: avoid;
}

/* Force a new page before each section */
.section {
  break-before: page;
}

/* Keep a table on a single page if possible */
table {
  break-inside: avoid;
}

/* Keep a card component together */
.card {
  break-inside: avoid;
}
```

## Custom Fonts

Load custom fonts via `@font-face` with HTTPS URLs:

```html
<style>
  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
  }

  body {
    font-family: 'Inter', sans-serif;
  }
</style>
```

Google Fonts can also be loaded via the standard `<link>` tag.

## Design Tips for Print

HTML is designed for screens; PDFs are for print. A few conventions improve output:

**Use `mm` or `pt` units** for print-specific sizes rather than `px` or `rem` — they map directly to physical dimensions.

**Use `@media print`** to override screen-specific styles without duplicating rules:

```css
@media print {
  .sidebar { display: none; }
  .nav { display: none; }
  .content { width: 100%; }
}
```

**Set `color-adjust: exact`** (or `-webkit-print-color-adjust: exact`) on elements with background colors to ensure they render in the PDF:

```css
.highlighted {
  background-color: #fff3cd;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
```

**Test page breaks early** — Overly long tables or deeply nested flexbox layouts can produce unexpected breaks. Test with real data.

## Common Use Cases

- **Invoices and receipts** — Generate pixel-perfect invoices from HTML templates with dynamic data
- **Reports and dashboards** — Snapshot data visualizations to PDF using JavaScript chart libraries
- **Contracts and agreements** — Convert HTML agreement templates to signed, archivable PDFs
- **Certificates** — Custom-designed certificate PDFs from HTML layouts
- **Email archives** — Convert HTML email content to PDF for record-keeping

## Getting Started

[Sign up for free at app.podpdf.com](https://app.podpdf.com/signup) — 100 free PDFs, no credit card. The [API documentation](https://apidocs.podpdf.com) covers all options in detail.
