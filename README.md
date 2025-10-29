# VegBiz — Landing page (client) + Server scaffold

This repository contains a minimal scaffold for a B2B vegetable & retail landing page:

- `client/` — Vite + React landing page (dev scripts included in package.json)
- `server/` — Express server with a simple API and static serve option

Quick start

1. Install dependencies for client and server:

   - In `client/`:

     ```bash
     cd client
     npm install
     npm run dev
     ```

   - In `server/`:

     ```bash
     cd server
     npm install
     npm run dev
     ```

2. To produce a production build of the client and serve it with the server:

   ```bash
   cd client
   npm run build
   # copies client/dist -> server/public (manual step) or configure as needed
   cd ../server
   npm start
   ```

Notes

- This scaffold does not auto-install dependencies. Run `npm install` in each folder.
- Customize the UI in `client/src/App.jsx` and the API in `server/src/index.js`.
# PureOrigins
