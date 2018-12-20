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

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});
app.options('*', cors());

app.get('/', function(req, res) {
  res.send({ status: 'listening' });
});

app.listen(PORT || 4000, () =>
  console.log(
    `🚀 Server is listening at http://localhost:${PORT || 4000}${
      server.graphqlPath
    }`,
  ),
);
