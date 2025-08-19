export const Login = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const VerifyLogin = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const CreateUserProfile = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const UpdateUserProfile = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};

export const ReadUserProfile = async (req, res) => {
  try {
    return res.json({ status: "Success", message: "" });
  } catch (e) {
    return res.json({ status: "Failed", message: e.toString });
  }
};
