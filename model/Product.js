import { DataTypes } from "sequelize";
import { db } from "../connection/db.js";

const Product = db.define("Product", {
  id: { type: DataTypes.BIGINT, primaryKey: true },
  name: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  image: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

export default Product;
