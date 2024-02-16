import { Router } from "express";
import UserController from "../controllers/userController.mjs";

const router = Router();

router.get("/api/v1/users", UserController.getUsers);

router.post("/api/v1/users", UserController.createUser);

router.get("/api/v1/users/:userId", UserController.getUser);

router.put("/api/v1/users/:userId", UserController.updateUser);

router.delete("/api/v1/users/:userId", UserController.deleteUser);

router.post("/api/v1/users/invites/:invitationId", UserController.acceptInvitation);

router.get("/api/v1/users/invites/:invitationId", UserController.getInvitation);

router.post("/api/v1/users/invites", UserController.createInvitation);

export default router;