import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDes: { type: String, required: true },
    price: { type: String, required: true },
    discount: { type: Boolean },
    discountPrice: { type: String },
    image: { type: String, required: true },
    stock: { type: Boolean },
    star: { type: String },
    remark: { type: String },
    categoryID: { type: mongoose.Schema.Types.ObjectId, reqired: true },
    brandID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductsModel = mongoose.model("products", DataSchema);
export default ProductsModel;
