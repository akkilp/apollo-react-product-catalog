import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query{
        productsInCategory(category: String!): [ProductAPIResponse!]
        productsByManyfacturer(manufacturer: String!): [ManufacturerAPIResponse!]
    }

    type ManufacturerAPIResponse {
        id: String!
        dataload: String!
    }

    type ProductAPIResponse {
        id: String!
        name: String!
        category: String!
        color: [String]!
        price: Int!
        manufacturer: String!
    }

    type Product {
        id: ID!
        category: Category!
        color: [String]!
        price: Int!
        manufacturer: String!
        availability: AvailabilityLevel!
    }

    enum Category {
        GLOVES
        FACEMASKS
        BEANIES
    }

    enum AvailabilityLevel {
        OUT_OF_STOCK
        LESS_THAN_10
        IN_STOCK
    }

`

export default typeDefs