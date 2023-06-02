import { Router } from "express";

import {
  deleteProducts,
  getAllProducts,
  postProducts,
  updateProducts,
} from "../controllers/ProductController.js";

const routes = Router();

routes.get("/products", getAllProducts);
routes.post("/products", postProducts);
routes.delete("/products/:id", deleteProducts);
routes.put("/products/:id", updateProducts);

export default routes;
