import ProductItem from '../../shared/api/ProductModel';
import ProductAttributes from '../../shared/api/ProductModel';
import axios, { AxiosResponse } from 'axios';

class ProductAPI {

  public static async findAll(): Promise<ProductItem[]> {
    const response = await fetch('/api/products');
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