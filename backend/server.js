import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/databaseConnection.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const port = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from server side");
});
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    connectDB();
    console.log(`Server is up at ${port}`);
});