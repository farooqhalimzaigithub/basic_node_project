import Product from "../model/Product.js";

// getting all products

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.findAll();
    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
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
    message: "data deleted with id " + req.params.id,
  });
};

// update products
export const updateProducts = async (req, res) => {
  try {
    const data = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      status: "success",
      message: "data updated",
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: error,
    });
  }
};
