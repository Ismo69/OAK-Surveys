# Oak Surveys – Corporate Website

A professional multi-page corporate website for Oak Surveys, a Nigerian surveying firm established in 1974. Built with a full-stack Express + React architecture.

## Architecture

- **Frontend**: React + Vite + TailwindCSS v4 + Wouter (client-side routing)
- **Backend**: Express.js (TypeScript) serving both API routes and the Vite dev server
- **Database**: PostgreSQL via Drizzle ORM
- **Port**: 5000 (single port serves everything)

## Pages

| Route | Page |
|-------|------|
| `/` | Home – hero, services overview, legacy section |
| `/about` | About – company history, founder, leadership, notable projects |
| `/services` | Services – 5 service types with images |
| `/contact` | Contact – office info + live contact form + Google Maps embed |
| `/request-survey` | Request a Survey – full survey request form |

## Brand

- **Primary**: Deep blue `#001E60` (`hsl(221 100% 19%)`)
- **Secondary**: Red `#D4312A` (`hsl(3 67% 50%)`)
- **Headings**: Montserrat (Google Fonts)
- **Body**: Inter (Google Fonts)

## Database Schema

### `contact_enquiries`
Stores messages submitted via the Contact page form.
- `id` (UUID), `name`, `email`, `phone?`, `subject?`, `message`, `status` (new/read/replied), `created_at`

### `survey_requests`
Stores project enquiries submitted via the Request a Survey page.
- `id` (UUID), `full_name`, `company?`, `email`, `phone`, `project_location`, `survey_type` (enum), `description`, `status` (new/read/replied), `created_at`

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/contact` | Submit a contact enquiry |
| POST | `/api/survey-request` | Submit a survey project request |

## Key Files

- `shared/schema.ts` – Drizzle schema + Zod insert schemas for all tables
- `server/db.ts` – PostgreSQL connection via `pg` + Drizzle
- `server/storage.ts` – `DatabaseStorage` class (all CRUD operations)
- `server/routes.ts` – Express API routes
- `client/src/App.tsx` – Wouter routes
- `client/src/components/Navbar.tsx` – Site navigation with logo
- `client/src/components/Footer.tsx` – Footer with contact details
- `client/src/index.css` – Tailwind v4 theme (CSS variables in raw `H S% L%` format)

## Assets

- `attached_assets/Oak_surveys_logo_1773160685504.png` – Company logo
- `attached_assets/dad_pic_1773246913134.jpg` – Founder photo (grayscale)
- `attached_assets/uncle_k_pic_1773248943929.png` – Leadership photo (slight desaturation)
- `client/src/assets/images/` – Generated + stock images for About and Services pages

## Run Command

```
npm run dev
```
