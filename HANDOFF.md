# Arkana — Handoff Notes

Everything is built and the dev server runs cleanly (`npx next dev -p 3001`).  
The last production build (`npx next build`) passed with 0 errors.

---

## 1. Firebase Project Setup

You need a real Firebase project. Do this in the [Firebase Console](https://console.firebase.google.com):

1. **Create project** → name it `arkana` (or similar)
2. **Add a Web App** → copy the config values
3. Fill in `.env.local` at the project root (currently has placeholders):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

---

## 2. Firebase Authentication

In the Firebase Console → **Authentication → Sign-in method**:
- Enable **Email/Password**
- (Optional) disable all other providers

---

## 3. Firestore Database

In Firebase Console → **Firestore Database**:
- Create database in **production mode**
- Choose a region close to your users (e.g. `europe-west3` for Germany)

### Deploy security rules

```bash
npm install -g firebase-tools
firebase login
firebase init firestore   # select existing project
firebase deploy --only firestore:rules
```

The rules file is already written at `firestore.rules`.

### Data structure expected by the app

**Collection: `users/{uid}`**
```json
{
  "uid": "string",
  "email": "string",
  "displayName": "string | null",
  "hasAccess": false,
  "role": "student",
  "createdAt": "ISO string"
}
```

**Collection: `progress/{uid}/lessons/{lessonSlug}`**
```json
{
  "lessonSlug": "string",
  "completedAt": "ISO string",
  "userId": "string"
}
```

---

## 4. Granting Course Access to Users

Users are created automatically on first login but `hasAccess` defaults to `false`.  
To grant access, update the user's Firestore document manually (or build an admin panel later):

In Firebase Console → Firestore → `users` → find the user doc → set `hasAccess: true`.

The function `grantAccess(uid)` in `lib/firebase/firestore.ts` does this programmatically if you want to call it from a script or admin panel.

---

## 5. Firebase Hosting

`firebase.json` is already configured. After building:

```bash
npx next build          # generates the static `out/` folder
firebase deploy --only hosting
```

Your site will be live at `https://<project-id>.web.app`.

To add a custom domain: Firebase Console → Hosting → Add custom domain.

---

## 6. Remove the Dev Admin Bypass Before Launch

The login page has a **"Als Admin einloggen (Dev-Bypass)"** button for local testing.  
**Remove it before going live.**

File: `components/marketing/login-form.tsx`  
Delete the block at the bottom of the return statement marked with the comment `{/* DEV ONLY */}`.

Also remove the bypass logic from `app/(app)/layout.tsx`:
- The `DEV_ADMIN` constant
- The `devAdmin` state and `useEffect`
- The early-return render block that checks `if (devAdmin)`

---

## 7. Payment Integration (Not Yet Built)

The `/kaufen` page currently has a static CTA button with `href="#kaufen"`.  
You'll need to wire up a payment provider. Recommended options:

- **Stripe** — use Stripe Checkout (hosted page, easiest)
- **Digistore24** — common for German info-product creators
- **Elopage** — another German-market option

After payment, the provider needs to call a webhook that sets `hasAccess: true` on the user's Firestore document. This requires a small backend function (Firebase Cloud Function or a separate serverless endpoint).

---

## 8. Email on Registration (Optional but Recommended)

Currently no welcome email is sent when a user first logs in.  
Consider adding a Firebase Extension for transactional email (e.g. **Trigger Email** extension with SendGrid or Mailgun).

---

## 9. Quick Start on New Computer

```bash
# 1. Clone / copy the project folder
cd arkana

# 2. Install dependencies
npm install

# 3. Add .env.local with real Firebase credentials (see Section 1)

# 4. Start dev server
npx next dev -p 3001

# 5. Production build
npx next build

# 6. Deploy
firebase deploy
```

---

## Summary Checklist

- [ ] Create Firebase project & web app
- [ ] Fill in `.env.local` with real credentials
- [ ] Enable Email/Password auth in Firebase Console
- [ ] Create Firestore database (production mode)
- [ ] Deploy Firestore rules: `firebase deploy --only firestore:rules`
- [ ] Manually grant `hasAccess: true` to test user
- [ ] Remove dev admin bypass from `login-form.tsx` and `(app)/layout.tsx`
- [ ] Wire up payment provider → webhook → `grantAccess(uid)`
- [ ] Add custom domain in Firebase Hosting
- [ ] (Optional) Set up transactional email
