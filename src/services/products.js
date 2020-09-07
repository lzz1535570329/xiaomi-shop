import { get } from "../utils/request.js";

export function getProducts(page) {
  return get("http://localhost:3009/api/v1/products", { page });
}
