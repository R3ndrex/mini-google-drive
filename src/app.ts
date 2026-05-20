import express from "express";
import ApiError from "./error/ApiError.js";
import path from "node:path";
import ErrorHandler from "./middleware/ErrorHandler.js";
import indexRouter from "./routes/indexRoute.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", indexRouter);
app.use((req, res, next) => {
    next(ApiError.NotFound());
});

app.use(ErrorHandler);

export default app;
