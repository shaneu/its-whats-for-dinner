export default {
  env: process.env.NODE_ENV || 'development',
  expireTime: '30d',
  secrets: {
    JWT_SECRET: 'hahawhatevs',
  },
};
