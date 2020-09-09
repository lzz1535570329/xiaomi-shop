import { get, post, put, deleteData } from "../utils/request";
import { ip } from "../utils/ip";

// 新增
export function addAddressData(data) {
  return post(ip + "/api/v1/addresses", data);
}
// 修改
export function putData(id, data) {
  return put(ip + `/api/v1/addresses/${id}`, data);
}
// 删除
export function delAddressData(id) {
  return deleteData(ip + `/api/v1/addresses/${id}`);
}
// 查询
export function getAddressData() {
  return get(ip + `/api/v1/addresses`);
}

export function getAddressInfo(id) {
  return get(ip + `/api/v1/addresses/${id}`);
}
