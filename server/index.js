import express from "express";
import cors from "cors";
import "./db/index.js";
import UserRoute from "./router/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(3001, () => {
  console.log("Server up and running.... http://localhost:3001");
});
