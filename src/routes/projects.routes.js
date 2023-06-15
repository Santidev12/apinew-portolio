import { Router } from "express";
import controller from "../controllers/projects.controller.js";

const router = Router();

router.get("/", controller.all);
router.post("/", controller.create);
router.get("/:id", controller.one);
router.delete("/:id", controller.destroy);
router.put("/:id", controller.update);

export default router;
