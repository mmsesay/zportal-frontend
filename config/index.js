const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:5000/api/v1/portal' : 'https://your_deployment.server.com';