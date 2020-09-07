import { get } from "../utils/request";

export function cartInfo() {
  return get("http://localhost:3009/api/v1/shop_carts");
}
