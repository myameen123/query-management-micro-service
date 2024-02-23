import express from "express";
import { eventHandler } from "../controlers/event.controler.js";
import { getUserData } from "../controlers/query.controler.js";
const router = express.Router();

router.post("/events", eventHandler);
router.get("/user-data/:userId", getUserData);

export default router;
