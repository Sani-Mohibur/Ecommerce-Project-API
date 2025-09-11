import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    color: { type: String },
    size: { type: String },
    qty: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductCartsModel = mongoose.model("productcarts", DataSchema);
export default ProductCartsModel;
