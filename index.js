import { createServer } from 'http';
import app from './api/server';
import config from './config';
import connect from './api/db';

const server = createServer(app);
let currentApp = app;
connect();

server.listen(config.port, () => {
      console.log(`Server listening on ${config.port}`); // eslint-disable-line
});

if (module.hot) {
  module.hot.accept(['./api/server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
