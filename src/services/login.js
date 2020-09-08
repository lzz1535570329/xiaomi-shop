import { post } from "../utils/request";
import { ip } from "../utils/ip";
export function login(data) {
  return post(ip + "/api/v1/auth/login", data);
}
