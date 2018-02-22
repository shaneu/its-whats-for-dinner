const env = process.env.NODE_ENV;

const baseConfig = {
  db: {
    url: process.env.DATABASE_URL,
  },
  port: process.env.PORT || 7382,
  secrets: {},
};

let config;

switch (env) {
  case 'development':
    config = require('./dev').default;
    break;
  case 'testing':
    config = require('./testing').default;
    break;
  case 'production':
    config = require('./prod').default;
    break;
  default:
    config = require('./dev').default;
}

export default { ...baseConfig, ...config };
