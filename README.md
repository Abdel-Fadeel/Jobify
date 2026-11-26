# Jobify

A job-application tracker: log every job you apply to, track its status, and see your progress in charts. Built with **React 18, TypeScript, React Router 6 (loaders and actions) and React Query**, backed by a Node/Express/MongoDB API.

**Live demo:** [jobify-peach-phi.vercel.app](https://jobify-peach-phi.vercel.app) · Click **"Explore the app"** on the login page to sign in as a read-only demo user. The API runs on Render's free tier, so the first request may take up to a minute to wake it up.
**Back end:** [Abdel-Fadeel/Jobify-API](https://github.com/Abdel-Fadeel/Jobify-API)

## Features

- **Auth.** Register and log in, with the session kept in a secure HTTP-only cookie. A one-click demo user is available.
- **Add, edit and delete jobs** with position, company, location, status (pending / interview / declined) and type.
- **All jobs.** Search, filter by status and type, sort, and paginate. Filters live in the URL.
- **Stats.** Status totals plus a monthly applications chart that toggles between bar and area (Recharts).
- **Profile.** Update your details and upload an avatar.
- **Admin page** with total users and jobs, visible to admins only.
- **Dark mode**, a responsive sidebar and navbar, and toast notifications.

## Tech stack

| | |
|---|---|
| UI | React 18, styled-components, react-icons |
| Language | TypeScript |
| Routing and data | React Router 6.15 data APIs (`loader` / `action`), React Query 4 caching |
| HTTP | Axios (`withCredentials` for cookie auth) |
| Charts | Recharts |
| Tooling | Vite 4, ESLint |
| Hosting | Vercel (front end), Render (API), MongoDB Atlas |

## Getting started

Run the [API](https://github.com/Abdel-Fadeel/Jobify-API) on port 5100 first, then:

```bash
git clone https://github.com/Abdel-Fadeel/Jobify.git
cd Jobify
npm install
npm run dev
```

Then open http://localhost:5173. In development, Vite proxies `/api` to `http://localhost:5100` (see `vite.config.ts`), and `.env.development` sets `VITE_BASE_URL=/api/v1`.

For production, set `VITE_BASE_URL` to the deployed API URL, for example `https://<your-api>.onrender.com/api/v1`.

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── pages/        # Landing, Register, Login, DashboardLayout, AddJob, AllJobs, EditJob, Stats, Profile, Admin
├── components/   # Navbar, sidebars, JobsContainer, SearchContainer, charts, form rows, …
├── context/      # Dashboard and AllJobs context providers (+ their loaders)
├── assets/       # styled-components wrappers and images
└── utils/        # customFetch (Axios), constants, links
```

## Author

**Abdel-Fadeel Hamdy**, Front-End Engineer · [GitHub](https://github.com/Abdel-Fadeel)
