import { get } from "../utils/request";
import { ip } from "../utils/ip";

export function userInfo(data) {
  return get(ip + "/api/v1/users/info");
}
