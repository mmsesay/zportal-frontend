const dev = process.env.NODE_ENV !== 'production';
// 18.184.51.22:80 || localhost:5000
export const server = dev ? 'http://18.184.51.22:80/api/v1/portal' : 'https://18.184.51.22:80/api/v1/portal';