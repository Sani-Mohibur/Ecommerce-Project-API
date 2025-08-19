import BrandsModel from "../model/brandsModel.js";

export const BrandListService = async () => {
  try {
    let projection = { _id: 0, createdAt: 0, updatedAt: 0 };
    let data = await BrandsModel.find({}, projection);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
