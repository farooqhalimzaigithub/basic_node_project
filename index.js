import express from "express";
import { db } from "./connection/db.js";
import Product from "./model/Product.js";
const app = express();
import ProductRoutes from "./routes/ProductRoute.js";

app.use("/", ProductRoutes); //this middleware to use filter req

const port = 3000;

Product.sync({ force: false });

db.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`PORT runs on ${process.env.PORT}`)
  );
});

app.listen(port, () => console.log(`app runs on port ${port}`));
