import { createServer } from 'http';
import app from './api/server';
import config from './config';
import connect from './api/database';

const server = createServer(app);
let currentApp = app;
connect();

server.listen(config.port, () => {
  console.log('\x1b[34m%s\x1b[0m',`Server listening on http://localhost:${config.port}`); // eslint-disable-line
      console.log('---------------------------------------------------'); // eslint-disable-line
  console.log('\x1b[34m%s\x1b[0m',`GraphiQL available on http://localhost:${config.port}/docs`); // eslint-disable-line
});

if (module.hot) {
  module.hot.accept(['./api/server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
