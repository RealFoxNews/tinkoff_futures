export const environment = {
  production: false,
  apiUrl: process.env['API_URL'] || 'http://localhost:11111/',
  socketUrl: process.env['SOCKET_URL'] || 'ws://localhost:11111/',
};
