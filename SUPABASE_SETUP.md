# Supabase setup

This project uses Supabase for two things on the **Download QR code** step:

1. **Continue with Google** — `supabase.auth.signInWithOAuth({ provider: 'google' })`
2. **Email me the QR code** — calls the `send-qr-email` edge function, which sends the PNG via Resend

Below is the one-time setup. None of this is automated — these are manual Console steps.

---

## 1. Create the Supabase project

1. Go to https://supabase.com/dashboard, create a new project (any region close to your users).
2. From **Settings → API**, copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon / public key** → `VITE_SUPABASE_ANON_KEY`
3. Create a `.env` at the repo root (copy `.env.example`) and paste the values.

---

## 2. Enable Google OAuth

1. In Google Cloud Console (https://console.cloud.google.com):
   - Create / pick a project, then **APIs & Services → Credentials → Create Credentials → OAuth client ID**.
   - Application type: **Web application**.
   - **Authorized JavaScript origins**: `http://localhost:5173` (and your prod URL later).
   - **Authorized redirect URIs**: `https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback`.
   - Copy the **Client ID** and **Client Secret**.
2. In Supabase: **Authentication → Providers → Google** → toggle on, paste Client ID + Secret, save.
3. (Optional) **Authentication → URL Configuration**: set the **Site URL** to `http://localhost:5173` for dev.

That's it for OAuth — the frontend already calls `signInWithOAuth` and redirects back to `window.location.origin`.

---

## 3. Set up email sending (Resend)

The edge function uses [Resend](https://resend.com) — free tier covers 3,000 emails/month.

1. Sign up at https://resend.com, verify a sending domain (or use the `onboarding@resend.dev` sandbox for testing).
2. Create an API key.
3. Set the secrets on your Supabase project:
   ```sh
   supabase secrets set RESEND_API_KEY=re_xxxxxxxx
   supabase secrets set FROM_EMAIL="QR Generator <noreply@yourdomain.com>"
   ```
   (Or do this in the Supabase Dashboard → **Edge Functions → Manage secrets**.)

> You can swap Resend for SendGrid / Mailgun / Postmark / Gmail SMTP by editing
> `supabase/functions/send-qr-email/index.ts` — only the `fetch` call to the
> provider needs to change.

---

## 4. Deploy the edge function

Install the Supabase CLI if you don't have it: https://supabase.com/docs/guides/cli

```sh
supabase login
supabase link --project-ref YOUR-PROJECT-REF
supabase functions deploy send-qr-email --no-verify-jwt
```

`--no-verify-jwt` lets unauthenticated visitors invoke the function (since the
email step happens before the user signs in). If you later want only signed-in
users to use it, drop the flag and update `supabase/config.toml`.

---

## 5. Test locally

```sh
npm run dev
```

- Click **Continue with Google** → should redirect to Google → back to the app.
- Enter an email and click **Submit** → should receive the QR PNG attached.

If something fails, check the browser console and the function logs in
**Supabase Dashboard → Edge Functions → send-qr-email → Logs**.
