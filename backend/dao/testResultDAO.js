import { ObjectId } from "mongodb"
let testResults

export default class testResultDAO {
  static async injectDB(conn) {
    if (testResults) {
      return
    }
    try {
      testResults = await conn.db(process.env.DB_NAME).collection("testResults")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in testResultDAO: ${e}`
      )
    }
  }

  static async getTestResults() {
    try {
      const testResultsList = await testResults.find().toArray()
      const totalNumTestResults = testResultsList.length
      return { testResultsList, totalNumTestResults }
    } catch (e) {
      console.error(`Unable to get test results: ${e}`)
      return { testResultsList: [], totalNumTestResults: 0 }
    }
  }
  static async addTestResult(test_id, student_id, mark, max_mark) {
    try {
      const testResultDoc = {
        test_id: new ObjectId(test_id),
        student_id: new ObjectId(student_id),
        mark: mark,
        max_mark: max_mark,
      }
      await testResults.insertOne(testResultDoc)
      return { status: "success" }
    } catch (e) {
      console.error(`Unable to add test result: ${e}`)
      return { status: "error" }
    }
  }
}
