import { createServer } from 'http';

import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground, gql } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import './mongoose-connect';

import schema from './graphql';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Server running' });
});

const startApolloServer = async () => {
  const httpServer = createServer(app);
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
  httpServer.listen({ port: 3001 });
  console.log("Server running at: http://localhost:3001/graphql");
};

startApolloServer();