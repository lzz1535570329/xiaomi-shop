import { get } from "../utils/request";
import { ip } from "../utils/ip";
export function cartInfo() {
  return get(ip + "/api/v1/shop_carts");
}
