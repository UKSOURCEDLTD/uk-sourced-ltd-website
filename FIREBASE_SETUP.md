# Firebase Setup Guide for UK Sourced Ltd

Since you haven't used Firebase before, here is a quick 5-minute guide to get your backend working. This is required for the **CMS**, **Contact Form**, and **Image Uploads**.

## Step 1: Create Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com/) and log in with your Google account.
2. Click **"Create a project"** (or "Add project").
3. Name it **"UK Sourced"**.
4. Disable Google Analytics for now (simpler) or keep it on.
5. Click **"Create project"**. Wait for it to finish and click **"Continue"**.

## Step 2: Get Your Keys
1. On the Project Overview page, look for the text "Get started by adding Firebase to your app".
2. Click the **Web icon (`</>`)**.
3. Register app:
   - App nickname: `uk-sourced-web`
   - Click **"Register app"**.
4. You will see a code block with `const firebaseConfig = { ... }`.
5. **KEEP THIS OPEN**. You will need these values for your `.env.local` file.

## Step 3: Enable Authentication (Login)
1. In the left sidebar, click **Build** > **Authentication**.
2. Click **"Get started"**.
3. Under "Sign-in method", click **"Email/Password"**.
4. Toggle **"Enable"** (leave "Email link" off).
5. Click **"Save"**.

## Step 4: Enable Database (Leads & Blogs)
1. In the left sidebar, click **Build** > **Firestore Database**.
2. Click **"Create database"**.
3. Choose a location (e.g., `eur3` for Europe or `nam5` for US).
4. **IMPORTANT:** Choose **"Start in test mode"**.
   - *Note: This allows read/write access for 30 days. We can secure this later.*
5. Click **"Create"**.

## Step 5: Enable Storage (Images)
1. In the left sidebar, click **Build** > **Storage**.
2. Click **"Get started"**.
3. Choose **"Start in test mode"**.
4. Click **"Done"**.

## Step 6: Connect to Your Code
1. Open the `.env.local.example` file I created in your project folder.
2. Rename it to `.env.local`.
3. Copy the values from **Step 2** into this file. It should look like this:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=uk-sourced...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=uk-sourced...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=uk-sourced...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123...
NEXT_PUBLIC_FIREBASE_APP_ID=1:123...
```

4. **Restart your server**: Use `Ctrl+C` to stop, then `npm run dev` to start again.

Done! Your CMS will now work. 
