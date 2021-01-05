import { RESTDataSource } from 'apollo-datasource-rest';

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://bad-api-assignment.reaktor.com/v2/products/';
  }

  productReducer(product) {
      return {
          id: product.id,
          name: product.name,
          category: product.type,
          color: product.color,
          price: product.price,
          manufacturer: product.manufacturer
      }
  }

  async getAllByCategory({category}) {
    const response = await this.get(category);
    return Array.isArray(response)
      ? response.map(product => this.productReducer(product))
      : [];
  }

}

export default ProductAPI