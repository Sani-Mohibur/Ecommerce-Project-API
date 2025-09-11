import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductWishesModel = mongoose.model("productwishes", DataSchema);
export default ProductWishesModel;
