import mongoose from "mongoose";
import ProductWishesModel from "../model/productWishesModel.js";

const ObjectId = mongoose.Types.ObjectId;

//Add product to wishlist
export const CreateWishService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;
    let postJSON = {
      productID: productID,
      userID: user_id,
    };
    await ProductWishesModel.updateOne(
      postJSON,
      { $set: postJSON },
      { upsert: true }
    );
    return {
      status: "Success",
      message: "This product has been added to your wishlist.",
    };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

//Get wishlist of a user
export const ReadWishListService = async (req) => {
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

    let data = await ProductWishesModel.aggregate([
      Match,
      JoinWithProduct,
      Projection,
    ]);
    return {
      status: "Success",
      message: "Your wishlist has been retrieved successfully.",
      data: data,
    };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

//Remove product from wishlist
export const RemoveWishService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;
    let postJSON = {
      productID: productID,
      userID: user_id,
    };
    await ProductWishesModel.deleteOne(postJSON);
    return {
      status: "Success",
      message: "This product has been removed from your wishlist.",
    };
  } catch (err) {
    return { Status: "Failed", message: err.toString() };
  }
};
