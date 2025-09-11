import CustomerProfilesModel from "../model/customerProfilesModel.js";
import UsersModel from "../model/usersModel.js";
import sendEmail from "../utility/emailUtility.js";
import { TokenEncode } from "../utility/tokenUtility.js";

export const LoginService = async (req) => {
  try {
    let { email } = req.body;
    let code = Math.floor(100000 + Math.random() * 900000);
    let EmailTo = email;
    let EmailSubject = "Ecommerce - Verification Code";
    let EmailText = `Your verification code is ${code}`;
    await sendEmail(EmailTo, EmailSubject, EmailText);

    await UsersModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );
    return {
      status: "Success",
      message: "Verification code sent to your mail.",
    };
  } catch (error) {
    return { status: "Failed", message: error.toString() };
  }
};

export const VerifyLoginService = async (req) => {
  try {
    let { email, otp } = req.body;
    let total = await UsersModel.find({ email: email, otp: otp });
    if (total.length === 1) {
      let user_id = await UsersModel.find({ email: email, otp: otp }).select(
        "_id"
      );
      let token = TokenEncode(email, user_id[0]["_id"].toString());
      await UsersModel.updateOne({ email: email }, { $set: { otp: "0" } });
      return { status: "Success", message: "Valid OTP", token: token };
    } else {
      return { status: "Failed", message: "Invalid OTP" };
    }
  } catch (error) {
    return { status: "Failed", message: error.toString() };
  }
};

export const CreateUserProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await CustomerProfilesModel.updateOne(
      { userID: user_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "Success", message: "Profile created successfully" };
  } catch (error) {
    return { status: "Failed", message: error.toString() };
  }
};

export const UpdateUserProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await CustomerProfilesModel.updateOne(
      { userID: user_id },
      { $set: { ...reqBody } },
      { upsert: true }
    );
    return { status: "Success", message: "Profile updated successfully" };
  } catch (error) {
    return { status: "Failed", message: error.toString() };
  }
};

export const ReadUserProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let data = await CustomerProfilesModel.findOne({ userID: user_id });
    return {
      status: "Success",
      message: "Profile fetched successfully",
      data: data,
    };
  } catch (error) {
    return { status: "Failed", message: error.toString() };
  }
};
