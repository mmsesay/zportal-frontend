const dev = process.env.NODE_ENV !== 'production';
// 18.197.130.180 || localhost:5000
export const server = dev ? 'http://18.197.130.180/api/v1/portal' : 'https://your_deployment.server.com';