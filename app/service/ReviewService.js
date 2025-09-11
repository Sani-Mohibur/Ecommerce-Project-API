import ProductReviewsModel from "../model/productReviewsModel.js";

export const ReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID, des, rating } = req.body;
    let postJSON = {
      userID: user_id,
      productID: productID,
      des: des,
      rating: rating,
    };
    let data = await ProductReviewsModel.updateOne(
      { userID: user_id, productID: productID },
      { $set: postJSON },
      { upsert: true }
    );
    return { status: "Success", message: "Your review is created", data: data };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};
