import { Router } from "express";
import controller from "../controllers/projects.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", controller.all);
router.get("/:id", controller.one);

router.post("/", authenticate, controller.create);
router.delete("/:id", authenticate, controller.remove);
router.put("/:id", authenticate, controller.update);

export default router;
