import Product from "../model/Product.js";

// getting all products
export const getAllProducts = async (req, res) => {
  const data = await Product.findAll();

  res.json({
    status: "success",
    data,
  });
};

// posting products
export const postProducts = async (req, res) => {
  const data = await Product.create(req.body);

  res.json({
    status: "success",
    message: "data created",
    data,
  });
};

// delete products
export const deleteProducts = async (req, res) => {
  const data = await Product.destroy({ where: { id: req.params.id } });
  res.json({
    status: "success",
    data: {
      id: 1,
      name: "ali",
      add: "peshawar",
    },
  });
};

// update products
export const updateProducts = (req, res) => {
  res.json({
    status: "success",
    data: {
      id: 1,
      name: "ali",
      add: "peshawar",
    },
  });
};
