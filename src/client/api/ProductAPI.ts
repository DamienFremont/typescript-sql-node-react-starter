import axios, { AxiosResponse } from 'axios';

import ProductAttributes, { FindAllResponse, FindParams } from '../../shared/api/ProductModel';

class ProductAPI {

  public static async findAll(params: FindParams): Promise<FindAllResponse> {
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
        console.log(error);
      })
  };

  public static async save(persisted: ProductAttributes): Promise<boolean> {
    return axios.post('/api/products', persisted)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

}
export default ProductAPI;