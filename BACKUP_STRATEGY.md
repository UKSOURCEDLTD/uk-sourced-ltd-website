# Backup Strategy for UK Sourced Ltd

Since your site is hosted on Firebase, traditional "FTP backups" don't apply. Here is how your site and data are secured.

## 1. Website Content (The Code)
Your website code is "backed up" in two ways:

1.  **Git Repository (Source of Truth):**
    - Your entire codebase lives in your Git repository.
    - **Action:** Ensure you commit and push changes to GitHub (or your remote provider) regularly.
    - *Recovery:* If you delete the local folder, just `git clone` it back.

2.  **Firebase Hosting Versioning (Deployment History):**
    - Every time you run `firebase deploy`, Firebase saves a version.
    - **Action:** You can view previous versions in the [Firebase Console > Hosting](https://console.firebase.google.com/project/uk-sourced-ltd-site/hosting).
    - *Recovery:* If a new deployment breaks the site, you can click "Rollback" in the Firebase Console to instantly revert to the previous working version.

## 2. Database (Firestore)
If you are using Firestore for leads or blog posts:

- **Automatic Backups:** Google Cloud can be configured to take automatic daily backups, but this requires a Blaze (Pay-as-you-go) plan.
- **Manual "Backup" (Export):**
    - You can export your data to a Google Cloud Storage bucket via the Google Cloud Console.
    - [Official Guide on Export/Import](https://firebase.google.com/docs/firestore/manage-data/export-import)

## 3. Disaster Recovery Steps
If everything goes wrong:

1.  **Code Loss:** PULL from Git.
2.  **Bad Deployment:** ROLLBACK in Firebase Console.
3.  **Data Loss:** IMPORT from Cloud Storage (if backups are enabled).
