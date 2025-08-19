import CategoriesModel from "../model/categoriesModel.js";

export const CategoryListService = async () => {
  try {
    let projection = { _id: 0, createdAt: 0, updatedAt: 0 };
    let data = await CategoriesModel.find({}, projection);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
