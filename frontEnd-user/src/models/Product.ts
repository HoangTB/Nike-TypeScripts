import axiosClient from "../api/AxiosClient";

export interface IProducts {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  new: number;
  quantity_inventory: number;
  Images: any[];
}
export class Products {
  static getProduct(): Promise<Array<IProducts>> {
    const url = "api/v1/products";
    return axiosClient.get(url);
  }

  static getProductById(id: number): Promise<IProducts> {
    const url = `api/v1/products/${id}`;
    return axiosClient.get(url);
  }
}
