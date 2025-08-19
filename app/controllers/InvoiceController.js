export const CreateInvoice = async (req, res) => {
  try {
    return res.json({ status: "Success" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString() });
  }
};

export const ReadInvoiceDetails = async (req, res) => {
  try {
    return res.json({ status: "Success" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString() });
  }
};

export const ReadInvoiceList = async (req, res) => {
  try {
    return res.json({ status: "Success" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString() });
  }
};
