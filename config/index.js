const dev = process.env.NODE_ENV !== 'production';
// 18.197.130.180 || localhost:5000
export const server = dev ? 'localhost:5000/api/v1/portal' : 'https://18.197.130.180:50/api/v1/portal';