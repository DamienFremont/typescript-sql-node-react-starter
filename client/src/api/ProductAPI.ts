import axios, { AxiosResponse } from 'axios';

import ProductAttributes, { FindAllParams, FindAllResponse } from '../../../common/src/model/ProductModel';

class ProductAPI {

  public static async findAll(params: FindAllParams): Promise<FindAllResponse> {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
    const response = await fetch('/api/products?' + query);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  public static async findOne(id: string): Promise<ProductAttributes> {
    return axios.get('/api/products/' + id)
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch((error) => {
        // TODO: error
      })
  };

  public static async create(persisted: ProductAttributes): Promise<boolean> {
    return axios.post('/api/products', persisted)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // TODO: error
      });
  };

  public static async update(persisted: ProductAttributes): Promise<boolean> {
    return axios.put(`/api/products/${persisted.id}`, persisted)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // TODO: error
      });
  };

}
export default ProductAPI;