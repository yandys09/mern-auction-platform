import express from "express";
import { addNewAuctionItem } from "../controllers/auctionItemController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, addNewAuctionItem);

export default router;
