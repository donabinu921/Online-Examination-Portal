import http from "../http-common.js"

class userService {
  getAllUsers() {
    return http.get("/")
  }
  getAllTests() {
    return http.get("/test")
  }

  createTest(data) {
    return http.post("/test", data)
  }

  getResults() {
    return http.get("/result")
  }

  postResults(data) {
    return http.post("/result", data)
  }
}

export default new userService()
