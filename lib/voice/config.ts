export const voiceConfig = {
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    location: process.env.GOOGLE_CLOUD_LOCATION || 'us-central1',
    agentId: process.env.GOOGLE_CLOUD_AGENT_ID,
    endpoint: `us-central1-dialogflow.googleapis.com`
};
