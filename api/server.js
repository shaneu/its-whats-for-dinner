import express from 'express';
import { graphiqlExpress } from 'apollo-server-express';
import graphQLRouter from './graphQLRouter';
import setupMiddleware from './middleware';

const app = express();
setupMiddleware(app);

app.get('/', (req, res) => res.json({ message: 'It worked' }));
app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

export default app;
