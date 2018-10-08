import ProductItem from '../../shared/api/ProductModel';

class ProductAPI {

  public static async callApi(): Promise<ProductItem[]> {
    const response = await fetch('/api/products');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

}
export default ProductAPI;