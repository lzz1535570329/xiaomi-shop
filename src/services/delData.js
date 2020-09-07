import { deleteData } from "../utils/request";

export function delCart(p) {
  return deleteData(`http://localhost:3009/api/v1/shop_carts/${p}`);
}
