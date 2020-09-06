export function setToken(val) {
  localStorage.setItem("token", val);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function removeToken() {
  localStorage.removeToken("token");
}

export function isLogined() {
  if (getToken()) {
    return true;
  } else {
    return false;
  }
}
