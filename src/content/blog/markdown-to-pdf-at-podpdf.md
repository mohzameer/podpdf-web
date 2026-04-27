---
title: "Markdown to PDF Conversion at PodPDF"
description: "PodPDF converts Markdown to PDF natively — no manual conversion step needed. Learn how it works, what Markdown features are supported, and how to customize the output."
publishedDate: 2026-04-18
author: "PodPDF Team"
tags: ["Markdown", "PDF", "conversion", "API"]
draft: false
---

Markdown has become the de-facto format for technical writing, documentation, README files, and content pipelines. Converting it to a well-formatted PDF is a natural next step — but the tooling to do it well has historically been awkward. PodPDF handles Markdown natively, without any intermediate conversion step.

## Why Markdown → PDF Conversion Is Harder Than It Looks

On the surface, Markdown is simple. In practice, producing a polished PDF from Markdown requires several things to work correctly:

1. **Parsing** — The Markdown must be parsed according to a spec (CommonMark, GFM, etc.) with consistent behavior
2. **Rendering** — The parsed AST must become styled HTML
3. **Layout** — Page breaks, margins, headers, footers, and page numbers must be handled
4. **Typography** — Code blocks, tables, blockquotes, and inline code all need distinct styling
5. **Images** — Referenced images must be fetched and embedded correctly

Most DIY approaches solve some of these but not all. You end up with code blocks that overflow pages, tables that break mid-row, or images that don't load.

## How PodPDF Handles Markdown

When you send Markdown to PodPDF, the pipeline works like this:

1. **Parse** — Markdown is parsed using a CommonMark-compliant parser with GitHub Flavored Markdown (GFM) extensions enabled (tables, strikethrough, task lists, autolinks)
2. **Convert to HTML** — The parsed content is rendered into styled HTML with a purpose-built stylesheet designed for print
3. **PDF rendering** — The HTML is rendered using a modern headless browser engine, which handles all layout, pagination, and typography

The result is a PDF that looks like a professionally styled document — not a raw text printout.

## Supported Markdown Features

PodPDF supports the full CommonMark spec plus GFM extensions:

- Headings (H1–H6) with proper typographic hierarchy
- **Bold**, *italic*, ~~strikethrough~~, and `inline code`
- Ordered and unordered lists, including nested lists
- Task lists (`- [x] done`)
- Tables with header rows
- Blockquotes
- Fenced code blocks with language labels
- Links (rendered as text with URL footnotes in print mode)
- Images (fetched and embedded)
- Horizontal rules
- Hard line breaks

## API Usage

### Via the REST API

Send Markdown content directly in the request body:

```bash
curl -X POST https://api.podpdf.com/v1/convert \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# My Report\n\nThis is a paragraph.\n\n## Section 1\n\n- Item one\n- Item two",
    "options": {
      "format": "A4",
      "margin": { "top": "20mm", "bottom": "20mm", "left": "20mm", "right": "20mm" }
    }
  }'
```

The response includes a URL to the generated PDF and job metadata:

```json
{
  "jobId": "job_abc123",
  "status": "completed",
  "pdfUrl": "https://files.podpdf.com/pdfs/job_abc123.pdf",
  "pageCount": 3,
  "createdAt": "2026-04-18T10:30:00Z"
}
```

### Via the Web App

You can paste or upload Markdown directly in the PodPDF web interface without writing any code. Upload a `.md` file or paste raw Markdown content, configure your PDF settings in the visual editor, and download the result.

## Customizing the Output

### Page format and margins

```json
{
  "markdown": "...",
  "options": {
    "format": "Letter",
    "margin": {
      "top": "25mm",
      "bottom": "25mm",
      "left": "30mm",
      "right": "30mm"
    }
  }
}
```

### Landscape orientation

```json
{
  "options": {
    "format": "A4",
    "landscape": true
  }
}
```

### Headers and footers

```json
{
  "options": {
    "displayHeaderFooter": true,
    "headerTemplate": "<div style='font-size:10px; margin: 0 auto;'>My Company — Confidential</div>",
    "footerTemplate": "<div style='font-size:10px; margin: 0 auto;'>Page <span class='pageNumber'></span> of <span class='totalPages'></span></div>"
  }
}
```

## Common Use Cases

### Technical documentation

Convert docs written in Markdown to PDFs for offline distribution, client deliverables, or archival. PodPDF preserves code block formatting, making it suitable for developer-facing documentation.

### README files

Turn your repository's README directly into a shareable PDF — useful for proposals, open-source project summaries, or onboarding packets.

### Reports and summaries

Generate reports from Markdown templates, merging in data before sending to PodPDF. This works well in automation pipelines where report templates are stored as Markdown.

### Meeting notes and changelogs

Convert Markdown-formatted meeting notes, changelogs, or release notes into PDFs for records management or email distribution.

## Tips for Better PDF Output

**Use ATX-style headings** (`# H1`, `## H2`) rather than setext-style (`===` underlines) — they render more reliably.

**Keep tables simple** — Complex merged-cell structures aren't supported in Markdown tables. Use them for tabular data, not complex layouts.

**Use absolute URLs for images** — Relative image paths won't resolve when the content is rendered server-side. Use full `https://` URLs for any images you want to appear in the PDF.

**Test with real content** — The free tier gives you 100 PDFs to test with. Use real-world Markdown content rather than synthetic examples to catch edge cases early.

## Getting Started

[Sign up for free](https://app.podpdf.com/signup) — no credit card required. You get 100 PDFs immediately. The [API documentation](https://apidocs.podpdf.com) has full reference for all Markdown conversion options.
