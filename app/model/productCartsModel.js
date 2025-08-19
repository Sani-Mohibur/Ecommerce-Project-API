import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    color: { type: String },
    size: { type: String },
    qty: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductCartsModel = mongoose.model("productcarts", DataSchema);
export default ProductCartsModel;
