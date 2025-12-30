# PodPDF Website - Quick Start Guide

## What is PodPDF?

PodPDF is a **serverless PDF generation API** that converts HTML, Markdown, and images into professional PDFs in seconds.

- 💰 **Pricing**: 100 free PDFs, then $0.01 per PDF
- ⚡ **Speed**: Generate PDFs in under 30 seconds
- 🔧 **Simple**: One API call to generate PDFs
- 🔒 **Secure**: Built on AWS infrastructure

## Get Started in 3 Steps

### 1. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

### 2. Key Pages to Check

- **Home**: `http://localhost:4321/` - Your landing page
- **Pricing**: `http://localhost:4321/pricing` - Pricing plans
- **API Docs**: `http://localhost:4321/docs` - Documentation
- **Login**: `http://localhost:4321/login` - Login page
- **Sign Up**: `http://localhost:4321/register` - Registration page
- **Dashboard**: `http://localhost:4321/dashboard` - User dashboard

### 3. Customize Your Branding

#### Update Site Info
Edit `src/config/site.ts`:
```typescript
export const name = 'PodPDF';
export const description = 'Transform your podcasts into beautifully formatted PDFs';
export const url = 'https://yoursite.com'; // Update with your domain
```

#### Replace Logo & Favicon
- Logo: `/public/logo.svg`
- Favicon: `/public/favicon.svg`
- Social image: `/public/images/og-image.png`

#### Update Colors (Optional)
Edit `src/styles/global.css` to customize your color scheme.

## What's Already Done

✅ **Home page** - PDF API value proposition with customer-facing copy
✅ **Pricing page** - Free tier (100 PDFs) + Pay-as-you-go ($0.01/PDF)
✅ **Login & Signup** - Business-oriented authentication pages
✅ **Dashboard** - Ready for job monitoring and API keys
✅ **API docs structure** - Ready for your API documentation
✅ **Responsive design** - Mobile-first with dark mode
✅ **Business-focused copy** - SaaS-oriented, customer-facing language

## What You Need to Do

### 1. Add Your API Documentation
Edit files in `src/content/docs/` based on `Business.md`:
- `introduction.md` - Overview of PodPDF API
- `installation.md` - Quick start guide
- `configuration.md` - API endpoints and options
- Add examples for HTML, Markdown, and Images to PDF conversion
- Document webhook integration
- Add error handling guides

### 2. Implement Authentication
The login/signup pages are UI-only. You need to:
- Choose an auth provider (Supabase, Auth0, Clerk, etc.)
- Add authentication logic to forms
- Protect dashboard routes
- Handle user sessions

### 3. Connect Dashboard to Backend
- Replace sample data in `src/lib/dashboard-data.ts`
- Connect to your API
- Implement real data fetching

### 4. Deploy
When ready to deploy:
```bash
npm run build
```

Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **Cloudflare**: `wrangler pages publish dist`

## Project Structure

```
src/
├── pages/              # All your pages
│   ├── index.astro    # Home page
│   ├── pricing.astro  # Pricing
│   ├── login.astro    # Login
│   ├── register.astro # Sign up
│   ├── docs/          # API docs
│   └── dashboard/     # Dashboard
├── components/         # Reusable UI components
├── config/            # Site configuration
└── content/           # Markdown content (docs)
```

## Common Tasks

### Add a New Page
1. Create `src/pages/yourpage.astro`
2. Add to navigation in `src/config/navigation.ts`

### Update Pricing
Edit `src/pages/pricing.astro` - look for the `plans` array

### Add Dashboard Page
Create file in `src/pages/dashboard/`
Update sidebar in `src/config/dashboard-navigation.ts`

### Customize Styles
- Global styles: `src/styles/global.css`
- Tailwind config: Uses Tailwind CSS v4 (in global.css)

## Need Help?

- Full setup details: See `SETUP.md`
- Original template docs: Check `/docs` folder
- Astro docs: https://docs.astro.build

## Support

Questions? Issues? Check:
1. Astro documentation
2. Virex template GitHub repo
3. Your `SETUP.md` file for detailed info

---

Happy coding! 🚀

