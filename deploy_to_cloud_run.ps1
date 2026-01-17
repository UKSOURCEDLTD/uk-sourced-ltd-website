# deploy_to_cloud_run.ps1

echo "Starting Cloud Run Deployment for Vibe Agency..."

# Configuration
$SERVICE_NAME = "vibe-agency"
$REGION = "europe-west2" # London

# Check if gcloud is installed
if (Get-Command "gcloud" -ErrorAction SilentlyContinue) {
    $GCLOUD_CMD = "gcloud"
} else {
    $FALLBACK_PATH = "$env:LOCALAPPDATA\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"
    if (Test-Path $FALLBACK_PATH) {
        echo "gcloud not in PATH, using fallback: $FALLBACK_PATH"
        $GCLOUD_CMD = "& `"$FALLBACK_PATH`""
    } else {
        Write-Error "Google Cloud SDK (gcloud) is not installed or not found. Please install it and log in."
        exit 1
    }
}

# Deploy command
echo "Deploying to Cloud Run (Region: $REGION)..."
echo "This will build the container from source using Cloud Build and deploy it."

Invoke-Expression "$GCLOUD_CMD run deploy $SERVICE_NAME --source . --region $REGION --allow-unauthenticated --platform managed"

if ($LASTEXITCODE -eq 0) {
    echo "Deployment Successful!"
    gcloud run services describe $SERVICE_NAME --region $REGION --format "value(status.url)"
} else {
    echo "Deployment Failed. Please check the logs."
}
