import { DataTypes, Sequelize } from "sequelize";
import { db } from "../connection/db.js";

const Product = db.define("Product", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  image: DataTypes.STRING,
  price: DataTypes.INTEGER,
  User_id: DataTypes.STRING,
});

// Product.hasOne(User, { foreignKey: "User_id" });
// User.belongsTo(Product, { foreignKey: "User_id" });

export default Product;
