import { config } from "dotenv";
// import Deck from "./models/Deck";
config();
import http from "http";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { getDeckController } from "./controllers/getDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const PORT = 5000;

const app = express();
const server = new http.Server(app);

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "../client/src/images/");
  },
  filename(req, file, callback) {
    const uniqueSuffix = Date.now();
    callback(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/life", getDecksController);
app.post("/life", createDeckController);
app.delete("/life/:deckId", deleteDeckController);
app.get("/life/:deckId", getDeckController);
app.post(
  "/life/:deckId/cards",
  upload.single("image"),
  createCardForDeckController
);
app.delete("/life/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});

// hi
// RayLight DLCX
