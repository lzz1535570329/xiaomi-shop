import { post } from "../utils/request";

export function addCart(p) {
  return post("http://localhost:3009/api/v1/shop_carts", {
    product: p,
    quantity: 1,
  });
}
