import express from "express";
import itemsRoute from "../modules/items/items.routes"

const router = express.Router();

router.use("/items", itemsRoute)

export default router