import { CategoryListService } from "../service/CategoryService.js";

export const CategoryList = async (req, res) => {
  let result = await CategoryListService();
  return res.json(result);
};
