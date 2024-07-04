export const environment = {
    production: false,
    logApiUrl: window.location.hostname === 'localhost' ? 'http://localhost:3000/api/logs' : 'https://blog-app-nh06.onrender.com/api/logs'
};
