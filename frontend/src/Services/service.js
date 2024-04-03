import http from "../http-common.js";

class userService {
  getAllUsers() {
    return http.get("/");
  }
}

export default new userService();
