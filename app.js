import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

//Default Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));

//Use limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

//Cache
app.set("etag", WEB_CACHE);

//Database connection
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database conncection failed");
  });

//api
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
