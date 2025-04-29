import { Router } from "express";
import { getAllItems } from "./items.controller";
const router = Router();

router.get("/all", getAllItems)

export default router