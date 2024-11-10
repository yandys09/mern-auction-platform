import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import {
  deleteAuctionItem,
  deletePaymentProof,
  fetchAllUsers,
  getAllPaymentProofs,
  getPaymentProofDetail,
  updateProofStatus,
} from "../controllers/superAdminController.js";

const router = express.Router();

router.delete(
  "/auctionitem/delete/:id",
  isAuthenticated,
  isAuthorized("Super Admin"),
  deleteAuctionItem
);

router.get(
  "/paymentproofs/getall",
  isAuthenticated,
  isAuthorized("Super Admin"),
  getAllPaymentProofs
);
router.get(
  "/paymentproof/:id",
  isAuthenticated,
  isAuthorized("Super Admin"),
  getPaymentProofDetail
);

router.put(
  "/paymentproofs/status/update/:id",
  isAuthenticated,
  isAuthorized("Super Admin"),
  updateProofStatus
);

router.delete(
  "/paymentproofs/delete/:id",
  isAuthenticated,
  isAuthorized("Super Admin"),
  deletePaymentProof
);

router.get(
  "/users/getall",
  isAuthenticated,
  isAuthorized("Super Admin"),
  fetchAllUsers
);

export default router;
