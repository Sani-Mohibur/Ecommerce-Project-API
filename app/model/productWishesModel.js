import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductWishesModel = mongoose.model("productwishes", DataSchema);
export default ProductWishesModel;
