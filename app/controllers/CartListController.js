export const CreateCart = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const ReadCart = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const UpdateCart = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const DeleteCart = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};
