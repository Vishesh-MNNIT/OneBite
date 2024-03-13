import express from "express";
import cookieParser from "cookie-parser";
// import cors from "cors";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials:true
// }))

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

//routes import

import userRouter from "./routes/user.routes.js";
import ownerRouter from "./routes/owner.routes.js";
import shopRouter from "./routes/shop.routes.js";
import shopKeeperRouter from "./routes/shopKeeper.routes.js";
import shopKeeperItemsRouter from "./routes/shopKeeperItems.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/owners", ownerRouter);
app.use("/api/v1/shopKeeper", shopRouter);
app.use("/api/v1/shop", shopKeeperRouter);
app.use("/api/v1", shopKeeperItemsRouter);

export { app };
