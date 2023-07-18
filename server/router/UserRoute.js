import express from "express";
import {
  addVoucher,
  deleteVoucher,
  getVoucher,
  getVoucherbyId,
  updateVoucher,
} from "../controller/voucher.js";

const router = express.Router();

router.get("/voucher", getVoucher);
router.get("/voucher/:id", getVoucherbyId);
router.post("/voucher", addVoucher);
router.patch("/voucher/:id", updateVoucher);
router.delete("/voucher/:id", deleteVoucher);

export default router;
