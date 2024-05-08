import { ObjectId } from "mongodb"

let retests

export default class retestDAO {
  static async injectDB(conn) {
    if (retests) {
      return
    }
    try {
      retests = await conn.db(process.env.DB_NAME).collection("retests")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in retestDAO: ${e}`
      )
    }
  }

  static async getRetests() {
    try {
      const retestsList = await retests.find().toArray()
      const totalNumRetests = retestsList.length
      return { retestsList, totalNumRetests }
    } catch (e) {
      console.error(`Unable to get retests: ${e}`)
      return { retestsList: [], totalNumRetests: 0 }
    }
  }

  static async retestRequest(student_id, test_id, test_name, status) {
    try {
      const retest = {
        student_id: new ObjectId(student_id),
        test_id: new ObjectId(test_id),
        test_name: test_name,
        status: status,
      }
      await retests.insertOne(retest)
      return { status: "Test success" }
    } catch (e) {
      console.error(`Unable to add retest: ${e}`)
      return { status: "error" }
    }
  }
}
