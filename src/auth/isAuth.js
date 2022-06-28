function isAuth() {
  return localStorage.getItem("access_token") ? true : false;
}

function userData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export { isAuth, userData };
