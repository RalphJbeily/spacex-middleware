const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');
const SpaceXAPI = require('./spacex-api');

dotenv.config({ silent: true });
const { PORT } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ spacexAPI: new SpaceXAPI() }),
});

server.applyMiddleware({ app });

app.listen(PORT || 4000, () =>
  console.log(
    `🚀 Server is listening at http://localhost:${PORT || 4000}${
      server.graphqlPath
    }`,
  ),
);
