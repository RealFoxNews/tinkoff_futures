export const environment = {
  production: true,
  apiUrl: process.env['PROD_API_URL'] || 'https://your-production-domain.com/api/',
  socketUrl: process.env['PROD_SOCKET_URL'] || 'wss://your-production-domain.com/',
};
