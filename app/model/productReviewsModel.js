import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    des: { type: String, required: true },
    rating: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductReviewsModel = mongoose.model("productreviews", DataSchema);
export default ProductReviewsModel;
