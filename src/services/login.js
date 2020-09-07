import { post } from "../utils/request";

export function login(data) {
  return post("http://localhost:3009/api/v1/auth/login", data);
}
