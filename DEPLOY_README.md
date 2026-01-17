# Deploying to Google Cloud Run

Your application is now configured for Google Cloud Run (Serverless Container Hosting).

## Prerequisites

1.  **Google Cloud SDK**: Ensure `gcloud` CLI is installed.
2.  **Authentication**: Run `gcloud auth login`.
3.  **Project Selection**: Run `gcloud config set project [YOUR_PROJECT_ID]`.
4.  **APIs Enabled**: Ensure "Cloud Run API" and "Cloud Build API" are enabled in your console.

## How to Deploy

I have included a PowerShell script to automate the deployment.

1.  Open your terminal in this directory.
2.  Run the script:
    ```powershell
    ./deploy_to_cloud_run.ps1
    ```

## What this does

1.  Uploads your source code (with the Dockerfile) to Google Cloud Build.
2.  Builds the Docker container in the cloud.
3.  Deploys the container to Cloud Run (Region: `europe-west2` / London).
4.  Makes the URL public.

## Manual Command

If you prefer to run the command manually:

```bash
gcloud run deploy vibe-agency --source . --region europe-west2 --allow-unauthenticated
```
