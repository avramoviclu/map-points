import { Router } from "express";
import PointController from "../controllers/pointController.mjs";

const router = Router();

router.get("/api/v1/points", PointController.getPoints);

router.post("/api/v1/points", PointController.createPoints);

router.get("/api/v1/points/:pointId", PointController.getPoint);

router.put("/api/v1/points/:pointId", PointController.updatePoint);

router.delete("/api/v1/points/:pointId", PointController.deletePoint);

export default router;