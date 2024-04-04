import { Router } from "express";
import userController from "./user.controller.js";

const router = Router();

router.route("/").get(userController.apiGetUsers);

export default router;
