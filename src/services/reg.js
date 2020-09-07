import { post } from "../utils/request";

export function reg(data) {
  return post("http://localhost:3009/api/v1/auth/reg", data);
}
