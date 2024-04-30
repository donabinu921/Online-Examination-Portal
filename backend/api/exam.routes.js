import { Router } from "express"
import userController from "./user.controller.js"
import testController from "./test.controller.js"

const router = Router()

router.route("/").get(userController.apiGetUsers)
router.route("/test").get(testController.apiGetTests)

export default router
