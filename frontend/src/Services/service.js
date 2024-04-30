import http from "../http-common.js"

class userService {
  getAllUsers() {
    return http.get("/")
  }
  getAllTests() {
    return http.get("/test")
  }
}

export default new userService()
