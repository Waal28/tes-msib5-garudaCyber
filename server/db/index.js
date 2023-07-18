import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/tes-msib5")
  .then(() => {
    console.log("Db connected.....");
  })
  .catch((error) => console.log(error));
