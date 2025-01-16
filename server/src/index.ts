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

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (
    _req: any,
    _file: any,
    cb: (arg0: null, arg1: string) => void
  ) {
    const directory = __dirname + "/public/images";
    cb(null, directory);
  },
  filename: (
    req: any,
    file: { originalname: any },
    cb: (arg0: null, arg1: string) => void
  ) => {
    cb(null, `${file.originalname}`);
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

  app.post("/upload", upload.single("image"), (req, res) => {
    if (req.file) {
      res.status(200).json({
        filePath: `/public/images/${req.file.filename}`,
      });
    } else {
      res.status(400).send("File upload failed");
    }
  });

  app.use("/public", express.static(path.join(__dirname, "../public")));

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`);
  });
};

bootstrap();
