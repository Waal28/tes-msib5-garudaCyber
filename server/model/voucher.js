import mongoose from "mongoose";

const schema = new mongoose.Schema({
  kode: {
    type: String,
    require: true,
  },
  diskon: {
    type: Number,
    require: true,
  },
  expired: {
    type: String,
    require: true,
  },
});
const Voucher = mongoose.model("voucher", schema);
export default Voucher;
