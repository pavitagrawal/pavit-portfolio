# Pavit Agrawal Portfolio

Personal portfolio for Pavit Agrawal, a software engineer focused on full-stack development, AI systems, data products, and production-minded application design.

## Live site

[pavit-portfolio.vercel.app](https://pavit-portfolio.vercel.app/)

## Pages

- `/` - Home and selected work
- `/projects` - Project portfolio with verified source and deployment links
- `/experience` - Internship experience and technical expertise
- `/achievements` - Competitions, credentials, and achievements
- `/resume` - Text-first software engineer CV with PDF download

## Stack

- React 18
- Vite 5
- Tailwind CSS
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite, normally `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

## Resume assets

The Resume page is based on `Pavit_Agrawal_Software_Engineer_CV.docx`. The public PDF is generated at:

`public/documents/Pavit_Agrawal_Software_Engineer_CV.pdf`

To regenerate the PDF after updating the public DOCX:

```bash
python scripts/convert_source_cv.py
```

## Deployment

The project includes `vercel.json` so the page routes resolve correctly on Vercel. Connect this repository to Vercel and use the default Vite build settings.
