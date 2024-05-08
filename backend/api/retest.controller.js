import retestDAO from "../dao/retestDAO.js"

export default class retestController {
  static async apiGetRetests(req, res, next) {
    try {
      const { retestsList, totalNumRetests } = await retestDAO.getRetests()
      let response = {
        retests: retestsList,
        total_results: totalNumRetests,
      }
      res.json(response)
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiRetestRequest(req, res, next) {
    try {
      const student_id = req.body.student_id
      const test_id = req.body.test_id
      const test_name = req.body.test_name
      const status = req.body.status
      const response = await retestDAO.retestRequest(
        student_id,
        test_id,
        test_name,
        status
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
