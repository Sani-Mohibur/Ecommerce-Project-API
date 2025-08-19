import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    img1: { type: String, required: true },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    des: { type: String, required: true },
    color: { type: String },
    size: { type: String },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductDetailsModel = mongoose.model("productdetails", DataSchema);
export default ProductDetailsModel;
