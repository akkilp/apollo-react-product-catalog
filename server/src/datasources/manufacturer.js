import { RESTDataSource } from 'apollo-datasource-rest';

class ManufacturerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://bad-api-assignment.reaktor.com/v2/availability/';
  }

  availabilityReducer(item){
      return {
          id: item.id,
          payload: item.payload
      }
  }

  async getAllByManufacturer({manufacturer}) {
    console.log(manufacturer)
    const response = await this.get('hennex');
    return Array.isArray(response)
      ? response.map(item => this.availabilityReducer(item))
      : [];
  }

}

export default ManufacturerAPI