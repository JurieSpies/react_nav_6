import {GraphQLClient, ClientContext} from 'graphql-hooks';
import * as React from 'react';
import Routes from './Routes';

const client = new GraphQLClient({
  url: 'https://eu1.prisma.sh/frikan-erwee/ov-assesment-shop-prisma/dev',
});

const App = () => {
  return (
    <ClientContext.Provider value={client}>
      <Routes />
    </ClientContext.Provider>
  );
};

export default App;
