import { get } from "../utils/request.js";
import { ip } from "../utils/ip";

export function getProducts(page) {
  return get(ip + "/api/v1/products", { page });
}
