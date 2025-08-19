import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    invoiceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    qty: { type: String },
    salePrice: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const InvoiceProductsModel = mongoose.model("invoiceproducts", DataSchema);
export default InvoiceProductsModel;
