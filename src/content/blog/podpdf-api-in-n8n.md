---
title: "How to Use the PodPDF API in n8n"
description: "A complete guide to integrating PodPDF into n8n workflows — automate PDF generation from any trigger using the HTTP Request node, handle responses, and chain into downstream actions."
publishedDate: 2026-04-24
author: "PodPDF Team"
tags: ["n8n", "automation", "PDF", "API", "workflow"]
draft: false
---

n8n is an open-source workflow automation platform that gives developers and power users deep control over their automation logic. Because n8n supports arbitrary HTTP requests and custom JavaScript, integrating PodPDF is straightforward and flexible.

This guide covers everything from basic setup to advanced patterns like dynamic HTML templates, webhook-based async jobs, and error handling.

## Prerequisites

- An [n8n instance](https://n8n.io) (self-hosted or n8n cloud)
- A [PodPDF account](https://app.podpdf.com/signup) with an API key

## Getting Your API Key

1. Log into [app.podpdf.com](https://app.podpdf.com)
2. Navigate to **Settings → API Keys**
3. Click **Create API Key** and name it (e.g., "n8n")
4. Copy the key

## Basic Setup: HTTP Request Node

Add an **HTTP Request** node to your workflow and configure it:

**Method:** `POST`

**URL:** `https://api.podpdf.com/v1/convert`

**Authentication:** Select **Header Auth**
- Name: `Authorization`
- Value: `Bearer YOUR_API_KEY`

**Body Content Type:** `JSON`

**Body:**
```json
{
  "html": "<h1>Hello from n8n</h1><p>This PDF was generated automatically.</p>",
  "options": {
    "format": "A4",
    "margin": { "top": "20mm", "bottom": "20mm", "left": "20mm", "right": "20mm" }
  }
}
```

**Send Headers:** Enable and add:
- `Content-Type`: `application/json`

Run the node. A successful response:

```json
{
  "jobId": "job_abc123",
  "status": "completed",
  "pdfUrl": "https://files.podpdf.com/pdfs/job_abc123.pdf",
  "pageCount": 2,
  "createdAt": "2026-04-24T10:00:00Z"
}
```

The `pdfUrl` is then available in subsequent nodes via `{{ $json.pdfUrl }}`.

## Storing the API Key as a Credential

For maintainability, store your API key as an n8n credential instead of hardcoding it.

1. Go to **Settings → Credentials** in n8n
2. Create a new **Header Auth** credential
3. Name: `PodPDF API`
4. Header Name: `Authorization`
5. Header Value: `Bearer YOUR_API_KEY`

Then in the HTTP Request node, select this credential under **Authentication** → **Predefined Credential Type** → **Header Auth**.

## Building Dynamic HTML Templates

The key to useful PDF generation is combining n8n's data from upstream nodes with an HTML template.

### Using a Code node to build HTML

Add a **Code** node before the HTTP Request node:

```javascript
const item = $input.first().json;

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #333; }
  .header { border-bottom: 2px solid #0070f3; padding-bottom: 20px; margin-bottom: 30px; }
  .company { font-size: 24px; font-weight: bold; color: #0070f3; }
  table { width: 100%; border-collapse: collapse; margin: 20px 0; }
  th { background: #f0f4ff; padding: 12px; text-align: left; border-bottom: 2px solid #0070f3; }
  td { padding: 10px 12px; border-bottom: 1px solid #eee; }
  .total { font-size: 20px; font-weight: bold; color: #0070f3; text-align: right; margin-top: 20px; }
  .footer { margin-top: 40px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 20px; }
</style>
</head>
<body>
  <div class="header">
    <div class="company">Acme Corp</div>
    <h2>Invoice #${item.invoiceNumber}</h2>
    <p>Date: ${new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>

  <p><strong>Bill To:</strong><br>
  ${item.customerName}<br>
  ${item.customerEmail}</p>

  <table>
    <tr>
      <th>Description</th>
      <th>Qty</th>
      <th>Unit Price</th>
      <th>Amount</th>
    </tr>
    ${item.lineItems.map(line => `
    <tr>
      <td>${line.description}</td>
      <td>${line.qty}</td>
      <td>$${line.unitPrice.toFixed(2)}</td>
      <td>$${(line.qty * line.unitPrice).toFixed(2)}</td>
    </tr>`).join('')}
  </table>

  <p class="total">Total: $${item.total.toFixed(2)}</p>

  <div class="footer">
    Thank you for your business. Payment due within 30 days.
  </div>
</body>
</html>`;

return { html };
```

Then in the HTTP Request node, use an expression for the body:

```json
{
  "html": "{{ $json.html }}",
  "options": {
    "format": "A4"
  }
}
```

## Complete Workflow: Invoice Generation

Here's a full n8n workflow for generating and emailing invoices from Airtable:

### Nodes

1. **Trigger: Airtable** — Poll for new records in an "Invoices" table
2. **Code** — Build HTML from Airtable record fields
3. **HTTP Request (PodPDF)** — Generate PDF, get `pdfUrl`
4. **HTTP Request (download)** — Download the PDF binary (method: GET, URL: `{{ $json.pdfUrl }}`, response: File)
5. **Gmail** — Send email with PDF attachment
6. **Airtable (update)** — Update the record with the PDF URL and "Sent" status

### Handling the PDF Binary

For email attachments, you need the binary PDF rather than just the URL. Add an HTTP Request node after PodPDF:

- **Method:** `GET`
- **URL:** `{{ $json.pdfUrl }}`
- **Response Format:** `File`
- **Binary Property:** `data`

The downloaded binary is then available as an attachment in Gmail, Outlook, or any email node.

## Workflow: Markdown Report to PDF

For simpler documents, use Markdown:

```javascript
// Code node
const report = $input.first().json;

const markdown = `# Weekly Report — ${report.weekEnding}

## Summary

- **Revenue:** $${report.revenue.toLocaleString()}
- **New Customers:** ${report.newCustomers}
- **Churned Customers:** ${report.churned}
- **Net MRR Change:** $${report.mrrChange.toLocaleString()}

## Top Performing Channels

${report.channels.map((c, i) => `${i + 1}. ${c.name} — $${c.revenue.toLocaleString()}`).join('\n')}

## Action Items

${report.actionItems.map(item => `- [ ] ${item}`).join('\n')}

---
*Generated automatically by n8n on ${new Date().toLocaleDateString()}*`;

return { markdown };
```

HTTP Request body:

```json
{
  "markdown": "{{ $json.markdown }}",
  "options": {
    "format": "A4",
    "margin": { "top": "25mm", "bottom": "25mm", "left": "25mm", "right": "25mm" }
  }
}
```

## Error Handling

Add an **Error Trigger** or use n8n's built-in error workflow to catch PDF generation failures.

In the HTTP Request node, enable **Continue On Fail** and add a downstream **IF** node:

```
IF {{ $json.status }} === "completed"
  → proceed to email/storage
ELSE
  → send alert to Slack/email
```

For more robust handling, check the HTTP status code:

```javascript
// Code node after HTTP Request
if ($input.first().json.status !== 'completed') {
  throw new Error(`PDF generation failed: ${JSON.stringify($input.first().json)}`);
}
return $input.first().json;
```

## Tips for n8n + PodPDF

**Use n8n credentials** — Store your API key as a credential to avoid hardcoding it and to make rotation easy.

**Build HTML in Code nodes** — Template literals in JavaScript give you full control over the HTML structure. Much more flexible than string manipulation in expression fields.

**Cache templates** — If you're generating the same document structure repeatedly, build the HTML template once in a Function node and reuse it.

**Use webhook notifications for long jobs** — For very large documents, use PodPDF's async job mode and receive a webhook notification when the PDF is ready. Configure a Webhook node in n8n as the callback URL.

**Test with n8n's manual execution** — Use n8n's "Execute workflow" button with test data before activating the workflow to catch HTML/template errors early.

## Pricing

PodPDF's free tier includes 100 PDFs. The Pay As You Go plan is $0.01/PDF with no rate limits — ideal for n8n workflows that may generate many PDFs during high-traffic periods.

[Create a free PodPDF account](https://app.podpdf.com/signup) and run your first n8n workflow today.
