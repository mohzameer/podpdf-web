---
title: "How to Use the PodPDF API in Zapier"
description: "A step-by-step guide to integrating PodPDF into your Zapier workflows — generate PDFs automatically from form submissions, CRM events, spreadsheet updates, and more."
publishedDate: 2026-04-22
author: "PodPDF Team"
tags: ["Zapier", "automation", "PDF", "API", "no-code"]
draft: false
---

Zapier connects thousands of apps into automated workflows. By adding PodPDF as an HTTP step, you can generate PDFs at any point in a Zap — triggered by a form submission, a CRM deal stage change, a new spreadsheet row, or virtually any other event.

This guide walks through everything you need: getting your API key, building the Zapier step, and handling the PDF output.

## Prerequisites

- A [PodPDF account](https://app.podpdf.com/signup) (free tier works — 100 PDFs included)
- A Zapier account (any plan)
- A trigger already set up in your Zap (e.g., Google Forms, Typeform, HubSpot, Airtable)

## Step 1: Get Your PodPDF API Key

1. Log into [app.podpdf.com](https://app.podpdf.com)
2. Go to **Settings → API Keys**
3. Click **Create API Key**, give it a name (e.g., "Zapier")
4. Copy the key — you'll paste it into Zapier in the next step

## Step 2: Add a "Webhooks by Zapier" Step

In your Zap, add a new action step and search for **Webhooks by Zapier**. Select the **POST** event.

Configure the step as follows:

**URL:**
```
https://api.podpdf.com/v1/convert
```

**Payload Type:** `JSON`

**Data (JSON body):**

```json
{
  "html": "<h1>Invoice</h1><p>Customer: {{customer_name}}</p><p>Amount: {{amount}}</p>",
  "options": {
    "format": "A4",
    "margin": { "top": "20mm", "bottom": "20mm", "left": "20mm", "right": "20mm" }
  }
}
```

Replace `{{customer_name}}` and `{{amount}}` with actual field mappings from your Zap's trigger data (click into the field to see Zapier's variable picker).

**Headers:**

| Key | Value |
|---|---|
| `Authorization` | `Bearer YOUR_API_KEY` |
| `Content-Type` | `application/json` |

Replace `YOUR_API_KEY` with the key you copied in Step 1.

## Step 3: Test the Step

Click **Test step** in Zapier. A successful response looks like:

```json
{
  "jobId": "job_abc123",
  "status": "completed",
  "pdfUrl": "https://files.podpdf.com/pdfs/job_abc123.pdf",
  "pageCount": 1,
  "createdAt": "2026-04-22T09:15:00Z"
}
```

The `pdfUrl` field is what you'll use in subsequent steps — it's the URL to the generated PDF.

## Step 4: Use the PDF in Subsequent Steps

Once PodPDF returns the PDF URL, you can pass it to any downstream step.

### Send the PDF via Gmail

Add a **Gmail → Send Email** step. In the attachment field, use Zapier's variable picker to select the `pdfUrl` from the PodPDF step. Zapier will fetch the file and attach it to the email automatically.

### Save to Google Drive

Add a **Google Drive → Upload File** step. Set the **File** field to the PodPDF `pdfUrl`. The PDF will be uploaded to your specified Google Drive folder.

### Attach to a HubSpot Deal

Add a **HubSpot → Create Attachment** step, passing the `pdfUrl` as the file source, linked to your deal ID from the trigger.

### Store in Dropbox or OneDrive

Both Dropbox and OneDrive have upload-from-URL actions in Zapier. Pass the `pdfUrl` directly.

## Building Dynamic HTML with Zapier Data

The real power comes from building HTML dynamically using trigger data. Here's an example invoice template that uses data from a Google Sheets trigger:

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; padding: 40px; }
  .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
  th { background: #f5f5f5; }
  .total { font-size: 18px; font-weight: bold; margin-top: 20px; text-align: right; }
</style>
</head>
<body>
  <div class="header">
    <h1>Invoice #{{invoice_number}}</h1>
    <p>Date: {{date}}</p>
  </div>
  <p><strong>Bill To:</strong> {{customer_name}}<br>{{customer_email}}</p>
  <table>
    <tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr>
    <tr>
      <td>{{item_description}}</td>
      <td>{{quantity}}</td>
      <td>{{unit_price}}</td>
      <td>{{line_total}}</td>
    </tr>
  </table>
  <p class="total">Total Due: {{total_amount}}</p>
</body>
</html>
```

In Zapier, paste this HTML into the `html` field of the PodPDF step, then use the variable picker to replace `{{...}}` placeholders with actual fields from your trigger.

## Using Markdown Instead of HTML

If your content is simpler, you can use Markdown instead:

```json
{
  "markdown": "# Invoice #{{invoice_number}}\n\n**Date:** {{date}}\n\n**Customer:** {{customer_name}}\n\n## Items\n\n| Description | Total |\n|---|---|\n| {{item_description}} | {{line_total}} |\n\n**Total Due:** {{total_amount}}",
  "options": {
    "format": "A4"
  }
}
```

## Common Zap Patterns

### Form submission → PDF → Email

1. **Trigger:** Typeform / Google Forms / Jotform submission
2. **Action 1:** PodPDF — generate PDF from form data
3. **Action 2:** Gmail / Outlook — email PDF to submitter and/or internal team

### CRM deal closed → Contract PDF → DocuSign

1. **Trigger:** HubSpot deal moved to "Closed Won"
2. **Action 1:** PodPDF — generate contract PDF from deal data
3. **Action 2:** DocuSign — send envelope with generated PDF

### New Airtable row → PDF report → Google Drive

1. **Trigger:** New record in Airtable
2. **Action 1:** PodPDF — generate PDF report from record fields
3. **Action 2:** Google Drive — save PDF to a specific folder
4. **Action 3:** Airtable — update the record with the PDF URL

### Scheduled weekly report

1. **Trigger:** Schedule by Zapier (weekly)
2. **Action 1:** Google Sheets — fetch report data
3. **Action 2:** Formatter by Zapier — assemble HTML from data
4. **Action 3:** PodPDF — generate PDF
5. **Action 4:** Email — send to distribution list

## Troubleshooting

**The test returns an error 401** — Check that your Authorization header is exactly `Bearer YOUR_API_KEY` with a space between "Bearer" and the key. No extra characters.

**The PDF is empty or shows an error** — Check the HTML you're sending. Common issues: unclosed tags, missing `<!DOCTYPE html>`, or images with relative URLs (use absolute HTTPS URLs).

**Zapier times out before the PDF is ready** — This shouldn't happen for normal documents, but if you're converting very large or complex HTML, check that your Zap's timeout allows enough time. PodPDF generates most PDFs in under 10 seconds.

**`pdfUrl` field isn't available in subsequent steps** — Make sure you ran the test step successfully. Zapier only makes response fields available after a successful test.

## Pricing

The Zapier HTTP step is available on Zapier's paid plans. PodPDF charges $0.01 per PDF on the Pay As You Go plan. 100 free PDFs are included on the free tier — enough to fully build and test your Zap.

[Get started with a free PodPDF account](https://app.podpdf.com/signup).
