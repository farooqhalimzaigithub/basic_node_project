import express from "express";
import ProductRoutes from "./routes/ProductRoute.js";

const app = express();

app.use("/", ProductRoutes);

const port = 3009;

app.listen(port, () => console.log(`app runs on port ${port}`));
