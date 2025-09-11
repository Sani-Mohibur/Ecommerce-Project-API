import mongoose from "mongoose";
import ProductCartsModel from "../model/productCartsModel.js";

const ObjectId = mongoose.Types.ObjectId;

//Add product to cart
export const CreateCartService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID, color, size, qty } = req.body;
    let cart = {
      userID: user_id,
      productID: productID,
      color: color,
      size: size,
      qty: qty,
    };
    await ProductCartsModel.create(cart);
    return { status: "Success", message: "Product added to cart" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

//Get cart of a user
export const ReadCartService = async (req) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
    let Match = { $match: { userID: user_id } };
    let JoinWithProduct = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };

    let Projection = {
      $project: {
        _id: 0,
        productID: 0,
        userID: 0,
        createdAt: 0,
        updatedAt: 0,
        "product._id": 0,
        "product.categoryID": 0,
        "product.brandID": 0,
        "product.createdAt": 0,
        "product.updatedAt": 0,
      },
    };

    let data = await ProductCartsModel.aggregate([
      Match,
      JoinWithProduct,
      Projection,
    ]);
    return { status: "Success", message: "Your cart list", data: data };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

//Update cart item
export const UpdateCartService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { color, qty, size, id } = req.body;
    let postJSON = {
      color: color,
      size: size,
      qty: qty,
    };
    let data = await ProductCartsModel.updateOne(
      { userID: user_id, _id: id },
      { $set: postJSON }
    );
    return { status: "Success", message: "Cart item updated", data: data };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

//Delete cart item
export const DeleteCartService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { id } = req.body;
    let deleteData = {
      userID: user_id,
      _id: id,
    };
    let data = await ProductCartsModel.deleteOne(deleteData);
    return {
      status: "Success",
      message: "This item removed from your cart",
      data: data,
    };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};
