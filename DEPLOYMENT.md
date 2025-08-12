# n8n Cloud Deployment Guide

## Files Created:
- ✅ `package.json` - Dependencies and scripts
- ✅ `index.js` - Entry point for deployment
- ✅ `workflow.json` - Your AI chatbot workflow (already exists)

## Step 1: Create .env file
Create `n8n/.env` with these contents:
```bash
# Hasura Configuration
HASURA_GRAPHQL_URL=https://ivbsvrhjpzemziisixvk.hasura.ap-south-1.nhost.run/v1/graphql
HASURA_ADMIN_SECRET=i0M9+^-&_+6hq,Tb7+':#f,-zb#'tbMb

# OpenRouter API Configuration
OPENROUTER_API_KEY=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

# n8n Configuration for Cloud
N8N_PORT=5678
N8N_PROTOCOL=https
N8N_HOST=your-deployment-domain.railway.app
MY_SECRET=hello123
N8N_RUNNERS_ENABLED=true

# Webhook URL for Hasura Actions (will be updated after deployment)
NHOST_N8N_WEBHOOK_URL=https://your-deployment-domain.railway.app
```

## Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project
4. Deploy from GitHub repo (just the n8n folder)
5. Add environment variables in Railway dashboard

## Step 3: Update Hasura Action
After deployment, update your Hasura Action to use the new public URL:
```yaml
handler: "https://your-app.railway.app/webhook/send-message"
```

## Step 4: Test
1. Send a message in your chat interface
2. Check n8n executions in Railway
3. Verify AI responses are generated

## Your n8n folder is now ready for cloud deployment! 🚀
