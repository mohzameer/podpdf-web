---
title: "How to Use PodPDF to Convert Any HTML or Markdown Document on the Web"
description: "A practical guide to using PodPDF's web application and API to convert HTML and Markdown documents to PDF — no coding required for the web app, full programmatic control via the API."
publishedDate: 2026-04-26
author: "PodPDF Team"
tags: ["PDF", "HTML", "Markdown", "web app", "tutorial", "no-code"]
draft: false
---

PodPDF gives you two ways to convert documents to PDF: a visual web application that anyone can use without code, and a REST API for developers and automation workflows. This guide covers both paths in full detail.

## Path 1: The Web Application (No Code Required)

The PodPDF web app at [app.podpdf.com](https://app.podpdf.com) is a drag-and-drop interface designed for anyone who needs to convert documents without writing code.

### Getting Started

1. [Sign up for free](https://app.podpdf.com/signup) — no credit card required, 100 PDFs included
2. Log in and navigate to the **Convert** section
3. Choose your input type: **HTML**, **Markdown**, or **URL**

### Converting HTML

**Option A: Paste HTML directly**
Click the HTML tab, paste your HTML into the editor, and click **Generate PDF**. The editor shows a preview as you type.

**Option B: Upload an HTML file**
Drag a `.html` file onto the upload area. PodPDF parses the file and renders it exactly as a browser would, including any linked stylesheets (if you reference external CSS via CDN URLs, they'll be fetched automatically).

**Tips for HTML input:**
- Include a full `<!DOCTYPE html>` declaration for best results
- Use absolute HTTPS URLs for images and external stylesheets
- Add `@media print` CSS rules if you want to hide navigation or sidebars
- Test with your exact HTML before batching large volumes

### Converting Markdown

Click the Markdown tab. You can:
- Paste Markdown text directly into the editor
- Upload a `.md` file

The real-time preview shows how the document will look before you generate. All standard Markdown is supported: headings, bold/italic, code blocks, tables, lists, blockquotes, and images (via absolute URLs).

### Converting from a URL

Enter any publicly accessible URL and PodPDF will render the page exactly as a browser would and save it as a PDF. This is useful for:
- Archiving web articles or reports
- Capturing live dashboards or data pages
- Converting documentation sites to offline PDFs

### PDF Settings

Before generating, configure your PDF in the settings panel:

| Setting | Options |
|---|---|
| Page format | A4, A3, A5, Letter, Legal, Tabloid |
| Orientation | Portrait, Landscape |
| Margins | Top, right, bottom, left (in mm) |
| Background graphics | On / Off |
| Header template | Custom HTML |
| Footer template | Custom HTML with page numbers |

### Downloading Your PDF

After generation (typically under 30 seconds), a download button appears. The PDF is also saved in your **Job History** under the Dashboard tab — accessible for download at any time.

### Job History and Dashboard

Every conversion you make — whether from the web app or API — appears in your dashboard. You can:
- View status (completed, failed, processing)
- Download any past PDF
- See page count, generation time, and input type
- Filter by date range or status

---

## Path 2: The API (For Developers and Automation)

The PodPDF REST API gives you the same rendering quality as the web app, accessible from any language or tool.

### Authentication

Every API request needs your API key in the Authorization header:

```
Authorization: Bearer YOUR_API_KEY
```

Get your key from **Settings → API Keys** in the dashboard.

### Convert HTML

```bash
curl -X POST https://api.podpdf.com/v1/convert \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "html": "<!DOCTYPE html><html><body><h1>My Document</h1><p>Hello, PodPDF!</p></body></html>",
    "options": {
      "format": "A4",
      "margin": { "top": "20mm", "bottom": "20mm", "left": "20mm", "right": "20mm" }
    }
  }'
```

### Convert Markdown

```bash
curl -X POST https://api.podpdf.com/v1/convert \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# My Document\n\nThis is a paragraph.\n\n## Section 1\n\n- Item A\n- Item B",
    "options": {
      "format": "A4"
    }
  }'
```

### Convert a URL

```bash
curl -X POST https://api.podpdf.com/v1/convert \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/report",
    "options": {
      "format": "A4",
      "waitForSelector": "#report-loaded"
    }
  }'
```

### API Response

```json
{
  "jobId": "job_xyz789",
  "status": "completed",
  "pdfUrl": "https://files.podpdf.com/pdfs/job_xyz789.pdf",
  "pageCount": 4,
  "fileSizeBytes": 184320,
  "createdAt": "2026-04-26T14:30:00Z"
}
```

### Language Examples

**Python:**

```python
import requests

response = requests.post(
    "https://api.podpdf.com/v1/convert",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={
        "html": "<h1>Python PDF</h1><p>Generated via PodPDF API.</p>",
        "options": {"format": "A4"}
    }
)

data = response.json()
print(data["pdfUrl"])
```

**Node.js:**

```javascript
const response = await fetch("https://api.podpdf.com/v1/convert", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    html: "<h1>Node.js PDF</h1>",
    options: { format: "A4" },
  }),
});

const data = await response.json();
console.log(data.pdfUrl);
```

**PHP:**

```php
$response = file_get_contents('https://api.podpdf.com/v1/convert', false, stream_context_create([
  'http' => [
    'method' => 'POST',
    'header' => "Authorization: Bearer YOUR_API_KEY\r\nContent-Type: application/json\r\n",
    'content' => json_encode([
      'html' => '<h1>PHP PDF</h1>',
      'options' => ['format' => 'A4'],
    ]),
  ],
]));

$data = json_decode($response, true);
echo $data['pdfUrl'];
```

---

## Practical Use Cases

### 1. Document archive from web content

You have a URL to a long article, dashboard, or documentation page. Paste the URL into the PodPDF web app and save a permanent PDF copy — regardless of whether the original URL changes or disappears.

### 2. Automated invoice generation

Your billing system generates an HTML invoice template populated with customer data. Call the PodPDF API from your backend, get the PDF URL, and email it to the customer — all in the same request cycle.

### 3. Weekly PDF reports from Markdown

Your reporting pipeline outputs data in Markdown format (from a script, a Notion export, or a GitHub README). Use the PodPDF API to convert each report to PDF and store it in S3 or Google Drive automatically.

### 4. Converting documentation for offline use

Your product docs are written in Markdown. Use PodPDF to batch-convert each page to PDF and assemble a documentation bundle for customers who need offline access.

### 5. No-code PDF generation for non-technical teams

A marketing or ops team needs to regularly produce formatted PDF outputs from templates — campaign summaries, partner reports, client proposals. The web app handles this without developer involvement: paste content, generate, download.

---

## Tips and Best Practices

**Start with the web app to validate your template** — Before integrating the API, use the web app to confirm your HTML or Markdown renders as expected. Iterate visually first, then automate.

**Use absolute URLs everywhere** — Images, fonts, and stylesheets referenced by URL must be absolute HTTPS paths. Relative paths won't resolve in a server-side rendering context.

**Set explicit margins** — The default margins are conservative. For documents with headers and footers, leave at least 15mm clearance on all sides to avoid clipping.

**Handle errors explicitly** — The API returns structured error responses. Build error handling into your integration from the start rather than assuming success.

**Monitor via the dashboard** — Even when using the API, all jobs appear in the dashboard. Use it to audit PDF generation, troubleshoot failed jobs, and track usage.

---

## Pricing

- **Free tier:** 100 PDFs (lifetime quota), no credit card
- **Pay As You Go:** $0.01/PDF, no rate limits, unlimited volume
- **Enterprise:** Same rate with monthly invoice billing, NET-30 terms

[Get started at app.podpdf.com](https://app.podpdf.com/signup) — your first 100 PDFs are on us.
