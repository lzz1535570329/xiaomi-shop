import { deleteData } from "../utils/request";
import { ip } from "../utils/ip";
export function delCart(p) {
  return deleteData(ip + `/api/v1/shop_carts/${p}`);
}
