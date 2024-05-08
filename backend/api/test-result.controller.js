import testResultDAO from "../dao/testResultDAO.js"

export default class testResultController {
  static async apiGetTestResults(req, res, next) {
    try {
      const { testResultsList, totalNumTestResults } =
        await testResultDAO.getTestResults()
      let response = {
        test_results: testResultsList,
        total_results: totalNumTestResults,
      }
      res.json(response)
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
  static async apiPostTestResult(req, res, next) {
    try {
      const test_id = req.body.test_id
      const student_id = req.body.student_id
      const mark = req.body.mark
      const max_mark = req.body.max_mark
      const response = await testResultDAO.addTestResult(
        test_id,
        student_id,
        mark,
        max_mark
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
