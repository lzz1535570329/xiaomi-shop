import { get } from "../utils/request";
import { ip } from "../utils/ip";
export function everyInfo(id) {
  return get(ip + `/api/v1/products/${id}`);
}
