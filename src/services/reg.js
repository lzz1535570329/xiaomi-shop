import { post } from "../utils/request";
import { ip } from "../utils/ip";
export function reg(data) {
  return post(ip + "/api/v1/auth/reg", data);
}
