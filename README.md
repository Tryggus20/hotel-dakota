This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
===============================================
db tables: 
-- Rooms
CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  number VARCHAR(10) NOT NULL,
  type VARCHAR(50),
  price NUMERIC(10,2),
  is_available BOOLEAN DEFAULT TRUE
);

-- Guests
CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20)
);

-- Bookings
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  guest_id INT REFERENCES guests(id),
  room_id INT REFERENCES rooms(id),
  check_in TIMESTAMP NOT NULL,
  check_out TIMESTAMP NOT NULL,
  status VARCHAR(20) DEFAULT 'pending'
);

-- Receptionists
CREATE TABLE receptionists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

================================================
timesheet:

11-19-25
1:45pm started project
2.25pm structured files/folders