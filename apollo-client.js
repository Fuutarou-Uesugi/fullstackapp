// ./apollo-client.js

import { ApolloClient, InMemoryCache,HttpLink } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri:'https://api.spacex.land/graphql/',
      })
});

export default client;