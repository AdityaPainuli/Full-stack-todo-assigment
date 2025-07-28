import { Router } from "express";
import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
