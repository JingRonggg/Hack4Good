import express from "express";
import getByName from "../controllers/account/getByName";

const router = express.Router();

router.get("/:username", [], getByName);

export default router;
