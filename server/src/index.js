import { ApolloServer } from 'apollo-server';
import ManufacturerAPI from './datasources/manufacturer.js';
import ProductAPI from './datasources/products.js';

import typeDefs from './schema.js'
import resolvers from './resolvers.js'

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        productAPI: new ProductAPI(),
        availabilityAPI: new ManufacturerAPI()
    })
})

server.listen().then(() => {
    console.log(`
      Server is running on port 4000
    `);
  });