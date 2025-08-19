import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true, unique: true },
    brandImg: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BrandsModel = mongoose.model("brands", DataSchema);
export default BrandsModel;
