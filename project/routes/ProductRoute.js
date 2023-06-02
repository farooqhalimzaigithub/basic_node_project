import { Router } from "express";
import {
  deleteProducts,
  getAllProducts,
  postProducts,
  updateProducts,
} from "../controller/ProductController.js";

const routes = Router();

routes.get("/products", getAllProducts);
routes.post("/products", postProducts);
routes.delete("/products", deleteProducts);
routes.put("/products", updateProducts);

export default routes;
