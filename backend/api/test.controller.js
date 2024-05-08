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
  static async apiCreateTest(req, res, next) {
    try {
      const { teacher_id,test_name, test_date, questions } = req.body

      if (!test_name || !test_date || !questions || questions.length === 0) {
        return res.status(400).json({ error: "Missing required fields" })
      }

      const validQuestions = questions.every(
        question =>
          question.question &&
          Array.isArray(question.options) &&
          question.options.length === 4 &&
          question.answer
      )

      if (!validQuestions) {
        return res.status(400).json({ error: "Invalid question structure" })
      }
      const test = {
        teacher_id,
        test_name,
        test_date,
        questions,
      }

      const response = await testDAO.addTest(test)

      res.json({ status: "Test created successfully" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
