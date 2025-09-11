import mongoose from "mongoose";
import ProductSlidersModel from "../model/productSlidersModel.js";
import ProductsModel from "../model/productsModel.js";
import ProductReviewsModel from "../model/productReviewsModel.js";

const ObjectId = mongoose.Types.ObjectId;

//ProductListByCategory
export const CategoryService = async (req) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let Match = { $match: { categoryID: CategoryID } };

    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrand = { $unwind: "$brand" };
    let UnwindCategory = { $unwind: "$category" };

    let Projection = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
      },
    };

    let data = await ProductsModel.aggregate([
      Match,
      JoinWithBrand,
      JoinWithCategory,
      UnwindBrand,
      UnwindCategory,
      Projection,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

//ProductListByRemark
export const RemarkService = async (req) => {
  try {
    let Remark = req.params.Remark;
    let Match = { $match: { remark: Remark } };

    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrand = { $unwind: "$brand" };
    let UnwindCategory = { $unwind: "$category" };

    let Projection = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
      },
    };

    let data = await ProductsModel.aggregate([
      Match,
      JoinWithBrand,
      JoinWithCategory,
      UnwindBrand,
      UnwindCategory,
      Projection,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

//ProductListByBrand
export const BrandService = async (req) => {
  try {
    let BrandID = new ObjectId(req.params.BrandID);
    let Match = { $match: { brandID: BrandID } };

    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrand = { $unwind: "$brand" };
    let UnwindCategory = { $unwind: "$category" };

    let Projection = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
      },
    };

    let data = await ProductsModel.aggregate([
      Match,
      JoinWithBrand,
      JoinWithCategory,
      UnwindBrand,
      UnwindCategory,
      Projection,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

//ProductListBySlider
export const SliderService = async () => {
  try {
    let projection = { _id: 0, productID: 0, createdAt: 0, updatedAt: 0 };
    let data = await ProductSlidersModel.find({}, projection);
    console.log(data);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

//ProductDetailsById
export const DetailsService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let Match = { $match: { _id: ProductID } };

    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithProductDetails = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let UnwindBrand = { $unwind: "$brand" };
    let UnwindCategory = { $unwind: "$category" };
    let UnwindProductDetails = { $unwind: "$details" };

    let Projection = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
        "details._id": 0,
        "details.productID": 0,
        "details.createdAt": 0,
        "details.updatedAt": 0,
      },
    };

    let data = await ProductsModel.aggregate([
      Match,
      JoinWithBrand,
      JoinWithCategory,
      JoinWithProductDetails,
      UnwindBrand,
      UnwindCategory,
      UnwindProductDetails,
      Projection,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

//ProductListByKeyword
export const KeywordService = async (req) => {
  try {
    let keyword = req.params.keyword;
    let regex = { $regex: keyword, $options: "i" };
    let SearchParams = [{ title: regex }, { shortDes: regex }];
    let SearchQuery = { $or: SearchParams };
    let Match = { $match: SearchQuery };

    let JoinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrand = { $unwind: "$brand" };
    let UnwindCategory = { $unwind: "$category" };

    let Projection = {
      $project: {
        _id: 0,
        categoryID: 0,
        brandID: 0,
        createdAt: 0,
        updatedAt: 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
        "details._id": 0,
        "details.productID": 0,
        "details.createdAt": 0,
        "details.updatedAt": 0,
      },
    };

    let data = await ProductsModel.aggregate([
      Match,
      JoinWithBrand,
      JoinWithCategory,
      UnwindBrand,
      UnwindCategory,
      Projection,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

//ProductReviewListById
export const ReviewListService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let Match = { $match: { productID: ProductID } };
    let JoinWithCustomerProfile = {
      $lookup: {
        from: "customerprofiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };
    let UnwindProfile = { $unwind: "$profile" };
    let Projection = {
      $project: { _id: 0, des: 1, rating: 1, "profile.cus_name": 1 },
    };

    let data = await ProductReviewsModel.aggregate([
      Match,
      JoinWithCustomerProfile,
      UnwindProfile,
      Projection,
    ]);
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Success", data: err.toString() };
  }
};
