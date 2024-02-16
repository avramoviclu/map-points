import { Router } from "express";
import VideoController from "../controllers/videoController.mjs";

const router = Router();

router.get("/api/v1/videos", VideoController.getVideosByUser);

router.get("/api/v1/videos/point/:pointId", VideoController.getVideosByPoint);

router.post("/api/v1/videos/point/:pointId", VideoController.addVideoToPoint);

router.put("/api/v1/videos/:videoId", VideoController.updateVideo);

router.delete("/api/v1/videos/:videoId", VideoController.deleteVideo);

export default router;