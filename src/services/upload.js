import { post } from "../utils/request";
import { ip } from "../utils/ip";

export function load(data) {
  return post(ip + "/api/v1/common/file_upload", data);
}
