// ./apollo-client.js

import { ApolloClient, InMemoryCache,HttpLink } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri:'https://spacex-production.up.railway.app/',
      })
});

export default client;