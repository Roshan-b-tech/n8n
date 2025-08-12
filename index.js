// This file tells Railway/Render how to start n8n
const { execSync } = require('child_process');

console.log('Starting n8n...');
console.log('Environment variables loaded:', {
    HASURA_GRAPHQL_URL: process.env.HASURA_GRAPHQL_URL,
    N8N_PORT: process.env.N8N_PORT,
    N8N_PROTOCOL: process.env.N8N_PROTOCOL,
    N8N_HOST: process.env.N8N_HOST
});

try {
    execSync('n8n start', { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to start n8n:', error);
    process.exit(1);
}
