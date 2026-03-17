# Public deploy on Vercel (fast MVP)

## 1) Push repository to GitHub

If your repo is local only, create a GitHub repo and push:

```bash
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## 2) Create Supabase project

1. Open Supabase dashboard and create a project.
2. Run SQL from `backend/supabase/schema.sql`.
3. In Authentication → Providers, enable Google.
4. In Storage, create buckets/folders:
   - `animations/success`
   - `animations/fail`
   - `images/questions`
   - `images/artifacts`

## 3) Deploy to Vercel (UI)

1. Go to https://vercel.com/new
2. Import your GitHub repository.
3. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL` (Vercel URL after first deploy, then redeploy)
4. Click **Deploy**.

## 4) Configure Google OAuth callbacks

In Google Cloud OAuth app + Supabase Auth URL settings add:

- `https://<your-app>.vercel.app/dashboard`
- `http://localhost:3000/dashboard`

## 5) Optional CLI deploy

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 6) MVP smoke test

Open routes:

- `/`
- `/login`
- `/dashboard`
- `/quiz`
- `/result`
- `/admin/users`

