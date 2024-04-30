let tests

export default class testDAO {
  static async injectDB(conn) {
    if (tests) {
      return
    }
    try {
      tests = await conn.db(process.env.DB_NAME).collection("tests")
    } catch (e) {
      console.error(`Unable to establish a collection handle in testDAO: ${e}`)
    }
  }
  static async getTests() {
    try {
      const testsList = await tests.find().toArray()
      const totalNumTests = testsList.length
      return { testsList, totalNumTests }
    } catch (e) {
      console.error(`Unable to get tests: ${e}`)
      return { testsList: [], totalNumTests: 0 }
    }
  }
}
