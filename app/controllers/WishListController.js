export const CreateWish = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString() });
  }
};

export const ReadWishList = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString() });
  }
};

export const RemoveWish = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString() });
  }
};
