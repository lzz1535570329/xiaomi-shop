import { get } from "../utils/request";

export function everyInfo(id) {
  return get(`http://localhost:3009/api/v1/products/${id}`);
}
