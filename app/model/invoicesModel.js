import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    total: { type: String, required: true },
    vat: { type: String, required: true },
    payable: { type: String, required: true },
    cusDetails: { type: String, required: true },
    shipDetails: { type: String, required: true },
    tranId: { type: String, required: true },
    deliveryStatus: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Invoicesmodel = mongoose.model("invoices", DataSchema);
export default Invoicesmodel;
