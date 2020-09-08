import { post } from "../utils/request";
import { ip } from "../utils/ip";
export function addCart(p) {
  return post(ip + "/api/v1/shop_carts", {
    product: p,
    quantity: 1,
  });
}
