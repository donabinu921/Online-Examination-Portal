import testDAO from "../dao/testsDAO.js"

export default class testController {
  static async apiGetTests(req, res, next) {
    const { testsList, totalNumTests } = await testDAO.getTests()
    let response = {
      tests: testsList,
      total_results: totalNumTests,
    }
    res.json(response)
  }
}
