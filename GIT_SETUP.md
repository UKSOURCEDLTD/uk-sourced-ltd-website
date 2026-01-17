# Git Setup Instructions

I have **successfully installed Git** and **committed your code** locally!

### Final Step: Push to Cloud
You just need to connect your repository and push the code.

Run these 3 commands in your terminal:

```powershell
# 1. Add your repository URL (Replace with your actual URL)
git remote add origin <YOUR_REPO_URL>

# 2. Rename branch to main (Standard practice)
git branch -M main

# 3. Push the code
git push -u origin main
```

### Next: Deploy via Cloud Run
1. Go to **Google Cloud Console > Cloud Run**.
2. Click **Create Service**.
3. Select **"Continuously deploy new revisions from a source repository"**.
4. Connect your repo.


### 5. Deploy via Cloud Run (Console)
Once the code is in Git:
1. Go to **Google Cloud Console > Cloud Run**.
2. Click **Create Service**.
3. Select **"Continuously deploy new revisions from a source repository"**.
4. Connect your repo and select the `Dockerfile`.
