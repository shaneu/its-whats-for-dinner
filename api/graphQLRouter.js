import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress } from 'apollo-server-express';
import { recipeType, recipeResolvers } from './resources/recipe';

const baseSchema = `
  schema {
    query: Query
  }
`;
const schema = makeExecutableSchema({
  typeDefs: [baseSchema, recipeType],
  resolvers: recipeResolvers,
});

const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    user: req.user,
  },
}));

export default graphQLRouter;
