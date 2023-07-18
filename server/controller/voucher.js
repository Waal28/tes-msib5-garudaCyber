import Voucher from "../model/voucher.js";

export const getVoucher = async (req, res) => {
  const vcr = await Voucher.find();
  const filterExpired = vcr.filter(
    (data) => new Date(data.expired) <= new Date()
  );

  filterExpired.map(
    async (data) =>
      await Voucher.updateOne({ _id: data._id }, { $set: { kode: "XXXXXX" } })
  );
  try {
    const vcr1 = await Voucher.find();
    res.json(vcr1.reverse());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const addVoucher = async (req, res) => {
  try {
    const vcr = await Voucher.insertMany(req.body);
    res.json(vcr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateVoucher = async (req, res) => {
  try {
    const vcr = await Voucher.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(vcr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteVoucher = async (req, res) => {
  try {
    const vcr = await Voucher.deleteOne({ _id: req.params.id });
    res.json(vcr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getVoucherbyId = async (req, res) => {
  try {
    const vcr = await Voucher.findById(req.params.id);
    res.json(vcr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
