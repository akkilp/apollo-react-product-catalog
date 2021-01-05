const resolvers = {
    Query: {
        productsInCategory: ( _, {category}, {dataSources} ) => {
            return dataSources.productAPI.getAllByCategory({category})
        },
        productsByManufacturer: ( _, {manufacturer}, {dataSources} ) => {
            return dataSources.availabilityAPI.getAllByManufacturer({manufacturer})
        },
    
    }
}

export default resolvers