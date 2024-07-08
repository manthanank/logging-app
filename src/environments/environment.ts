export const environment = {
    production: false,
    logApiUrl: window.location.hostname === 'localhost' ? 'http://localhost:3000/api/logs' : 'https://backend-app-manthanank.vercel.app/api/logs'
};
