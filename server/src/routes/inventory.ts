import express from "express";
import createInventory from "../controllers/inventory/create-inventory";
import deleteInventory from "../controllers/inventory/delete-inventory";
import getInventory from "../controllers/inventory/get-inventory";
import getInventoryById from "../controllers/inventory/get-inventory-by-id";
import getInventoryByName from "../controllers/inventory/get-inventory-by-name";
import updateInventory from "../controllers/inventory/update-inventory";

const router = express.Router();
// const multer = require("multer");

// // Configure Multer
// const storage = multer.diskStorage({
//   destination: (
//     _req: any,
//     _file: any,
//     cb: (arg0: null, arg1: string) => void
//   ) => {
//     cb(null, "uploads/"); // Save files in the 'uploads/' folder
//   },
//   filename: (
//     _req: any,
//     file: { originalname: any },
//     cb: (arg0: null, arg1: string) => void
//   ) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
// });

// // Endpoint to handle file uploads
// router.post("/upload", upload.single("image"), (req, res) => {
//   try {
//     const filePath = `/uploads/${req.body.image.filename}`;
//     res.status(200).json({ filePath });
//   } catch (error) {
//     res.status(500).json({ error: "File upload failed" });
//   }
// });

router.get("/", [], getInventory);

router.post("/", [], createInventory);
router.post("/upload", [], createInventory);

router.get("/:id", [], getInventoryById);

router.get("/name/:name", [], getInventoryByName);

router.put("/:id", [], updateInventory);

router.delete("/:id", [], deleteInventory);

export default router;
