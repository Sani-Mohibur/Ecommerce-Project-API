import {
  BrandService,
  CategoryService,
  DetailsService,
  KeywordService,
  RemarkService,
  ReviewListService,
  SliderService,
} from "../service/ProductService.js";

export const ProductListByCategory = async (req, res) => {
  let result = await CategoryService(req);
  return res.json(result);
};

export const ProductListByRemark = async (req, res) => {
  let result = await RemarkService(req);
  return res.json(result);
};

export const ProductListByBrand = async (req, res) => {
  let result = await BrandService(req);
  return res.json(result);
};

export const ProductListBySlider = async (req, res) => {
  let result = await SliderService();
  return res.json(result);
};

export const ProductDetailsById = async (req, res) => {
  let result = await DetailsService(req);
  return res.json(result);
};

export const ProductListByKeyword = async (req, res) => {
  let result = await KeywordService(req);
  return res.json(result);
};

export const ProductReviewListById = async (req, res) => {
  let result = await ReviewListService(req);
  return res.json(result);
};

export const CreateProductReview = async (req, res) => {
  try {
    return res.json({ status: "Success" });
  } catch (e) {
    return res.json({ status: Failed, message: e.toString });
  }
};
