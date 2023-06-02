import express from "express";
const app = express();
import ProductRoutes from "./routes/ProductRoute.js";


 app.use("/", ProductRoutes);//this middleware to use filter req

const port = 3000;

app.listen(port, () => console.log(`app runs on port ${port}`));
