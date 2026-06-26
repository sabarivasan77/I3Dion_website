# Contributing to I3DION

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Development Workflow

1. Clone the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Ensure your Node environment is active and install dependencies: `npm ci`.
4. Make your changes and test locally using `npm run dev`.
5. Run the production build locally to ensure no compilation errors: `npm run build`.
6. Push to your branch and submit a Pull Request.

## Coding Standards

- We use **React Functional Components** and **Hooks**. Avoid class components.
- Styling is strictly done via **Tailwind CSS v4** utility classes. Do not write raw CSS unless absolutely necessary (e.g., global resets in `index.css`).
- Animations should leverage **Framer Motion**. Keep them smooth and performant. Do not over-animate.
- All new API endpoints must be placed in `/api` as Vercel Serverless Functions.

## Testing

Ensure that you do not break the Selenium automation script located in `automation/audit.js`. If you change DOM structures (especially IDs and critical tags), update the test script accordingly.
