# I3DION Official Platform

![I3DION](public/logos/dark_logo.png)

> **Enterprise Industrial Technology & Spatial Computing Platform**

---

## 📖 Project Overview

I3DION is a premium technology platform that bridges the gap between complex industrial product manufacturing and modern software architecture. This repository contains the source code for the official I3DION public-facing corporate website and the underlying **I3DION Spatial** technology showcase.

The platform is designed as a high-performance single-page application (SPA) with integrated DevSecOps pipelines, automated reporting, and secure backend enterprise routing.

---

## 🏢 Company Overview

I3DION was founded on a singular realization: industrial enterprises are producing incredibly complex physical products, but lack the software architecture to effectively visualize and interact with them in the digital space. 

**I³ / 3D / ION**
- **I³ (Imagination, Innovation, Intelligence)**: The foundation of progress.
- **3D**: Bridging physical and digital worlds via spatial computing.
- **ION (Integration)**: Seamlessly connecting high-performance tech with enterprise infrastructure.

---

## 🚀 Product Overview: I3DION Spatial

**I3DION Spatial** is our flagship (Coming Soon) enterprise spatial computing engine. 
It provides a highly-optimized, WebXR-ready engine that renders complex industrial geometry directly in the browser, connected securely to enterprise backend systems via encrypted pipelines.

---

## 🏗 Architecture & Technology Stack

### Frontend
- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 (with strict brand color configuration)
- **Animation**: Framer Motion (micro-interactions, dynamic accordions, scroll timelines)
- **3D Engine**: Three.js (`@react-three/fiber`, `@react-three/drei`)
- **Routing**: React Router DOM (used for secured `/admin` dashboard only)

### Backend & Infrastructure
- **Hosting**: Vercel (Edge network, Serverless functions)
- **Database**: MongoDB (via Mongoose) for telemetry and secure contact logging
- **Email**: Nodemailer (SMTP transport for automated client responses)
- **CI/CD**: GitHub Actions (Scheduled Selenium UI/UX testing)

---

## 📁 Folder Structure

```
├── .github/
│   └── workflows/
│       └── weekly-audit.yml   # DevSecOps scheduled UI testing
├── api/
│   ├── contact.js             # Secure serverless contact endpoint
│   └── reports.js             # Protected telemetry data endpoint
├── automation/
│   └── audit.js               # Node.js Selenium WebDriver script
├── public/                    
│   └── logos/                 # Brand assets & favicons
├── src/
│   ├── components/            # Reusable UI (Navbar, Footer, HeroCanvas)
│   ├── pages/                 # SPA Sections (Hero, Identity, Product, Roadmap, etc.)
│   ├── App.jsx                # Application entry and layout router
│   └── index.css              # Global styles and Tailwind configuration
├── vercel.json                # Security headers and routing rules
└── package.json               # Dependencies and scripts
```

---

## ⚙️ Development Setup

### Prerequisites
- Node.js (v20+)
- npm (v10+)
- MongoDB connection URI
- Google App Password (for SMTP)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sabarivasan77/I3Dion_website.git
   cd I3Dion_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables (see below).

4. Start the development server:
   ```bash
   npm run dev
   ```

### Environment Variables
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>
EMAIL_PASS=your-google-app-password
ADMIN_PASSWORD=your-secure-dashboard-password
TARGET_URL=http://localhost:5173
```

---

## 🔒 Security Architecture

This repository implements strict DevSecOps protocols to ensure enterprise-grade protection.

- **Vercel Security Headers**: Configured in `vercel.json` to enforce `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, and `Referrer-Policy`.
- **API Protection**: All `api/` routes are serverless functions that do not expose secrets to the client.
- **Input Validation**: The contact form sanitizes all input before interacting with the database.
- **Protected Telemetry**: The `/admin` route and `api/reports.js` require Bearer token authentication matching the `ADMIN_PASSWORD` environment variable.

---

## 🤖 Automation & Testing (DevSecOps)

The platform includes an automated weekly testing pipeline utilizing **GitHub Actions** and **Selenium WebDriver**.

### Execution Flow
1. Every Sunday at 02:00 AM, GitHub Actions spins up an Ubuntu runner.
2. It installs Chrome, ChromeDriver, and project dependencies.
3. It executes `node automation/audit.js`.
4. The Selenium script navigates the production Vercel URL, checking for console errors, missing tags, and functional forms.
5. A comprehensive health and security score is calculated.
6. The results are logged to the MongoDB cluster.
7. `pdfkit` generates a PDF report, which is emailed to `i3diontech@gmail.com` via Nodemailer.

### Manual Trigger Guide
To manually trigger the security audit:
1. Navigate to the **Actions** tab in GitHub.
2. Select **Weekly Security & Health Audit** from the left sidebar.
3. Click the **Run workflow** dropdown on the right side.
4. Click the green **Run workflow** button.

### Local Testing
You can run the audit locally (requires Chrome to be installed):
```bash
export MONGODB_URI="..."
export EMAIL_PASS="..."
export TARGET_URL="http://localhost:5173"
node automation/audit.js
```

---

## 📧 Email & Contact Workflow

The `api/contact.js` endpoint handles public inquiries.
1. The user submits the form on the frontend.
2. The serverless function connects to MongoDB and saves a `Lead` record.
3. Nodemailer initializes a secure SMTP connection to Gmail.
4. Two emails are dispatched simultaneously:
   - **Internal Notification**: Sent to `i3diontech@gmail.com` with the lead's details.
   - **Visitor Auto-Reply**: A branded "Thank You" email sent directly to the prospective client.

---

## 📊 Database Architecture

MongoDB is utilized as the primary datastore.
- **AuditLog Collection**: Stores historical outputs from the Selenium DevSecOps pipeline (`healthScore`, `securityScore`, `criticalIssues`).
- **Leads Collection**: Stores sanitized contact form submissions.

---

## 🛠 Troubleshooting & Maintenance

- **Logo Not Loading**: Ensure images are placed in `public/logos/` without spaces in the filename.
- **Email Failing**: Verify your Google App Password. Standard Google passwords will not work.
- **Build Errors**: Check `npm run build` output. Vite chunk size warnings are normal for Three.js applications.

---

## 🤝 Contribution Guidelines

Please refer to `CONTRIBUTING.md` for standard coding practices. We mandate functional React components, strict Tailwind v4 utility usage, and pre-commit formatting.

---

## 📝 License

Proprietary Software. All rights reserved by **I3DION**.
