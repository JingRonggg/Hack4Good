import dotenv from "dotenv";
dotenv.config();

import app from "./utils/app"; // (server)
import express from "express"; // (server)
import mongo from "./utils/mongo"; // (database)
import { PORT } from "./constants/index";
import authRoutes from "./routes/auth";
import inventoryRoutes from "./routes/inventory";
import transactionRoutes from "./routes/transaction";
import taskRoutes from "./routes/task";
import accountRoutes from "./routes/account";
import path from "path";
import fs from "fs";

const multer = require("multer");
const directoryPath = path.resolve(__dirname, "../../client/public/images");

// Ensure the client/public/images directory exists
const clientImagesPath = path.resolve(__dirname, "../../client/public/images");
if (!fs.existsSync(clientImagesPath)) {
  fs.mkdirSync(clientImagesPath, { recursive: true });
}

fs.access(directoryPath, fs.constants.W_OK, (err) => {
  if (err) {
    console.error(`No write permissions for directory: ${directoryPath}`);
  } else {
    console.log(`Directory is writable: ${directoryPath}`);
  }
});

// Configure Multer to save files in the client/public/images directory
const storage = multer.diskStorage({
  destination: function (_req: any, _file: any, cb: any) {
    cb(null, clientImagesPath); // Set the upload directory to client/public/images
  },
  filename: function (_req: any, file: any, cb: any) {
    cb(null, `${Date.now()}-${file.originalname}`); // Add timestamp for unique filenames
  },
});

const upload = multer({ storage: storage });

const bootstrap = async () => {
  await mongo.connect();

  app.get("/", (req, res) => {
    res.status(200).send("Hello, world!");
  });

  app.get("/healthz", (req, res) => {
    res.status(204).end();
  });

  app.use("/auth", authRoutes);

  app.use("/inventory", inventoryRoutes);

  app.use("/transaction", transactionRoutes);

  app.use("/task", taskRoutes);

  app.use("/account", accountRoutes);

  // File upload endpoint
  app.post("/upload", upload.single("image"), (req, res) => {
    if (req.file) {
      res.status(200).json({
        filePath: `/images/${req.file.filename}`, // Accessible at /images/<filename>
      });
    } else {
      res.status(400).send("File upload failed");
    }
  });

  // Serve static files from client/public/images
  app.use("/images", express.static(clientImagesPath));

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`);
  });
};

bootstrap();
