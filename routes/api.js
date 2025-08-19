import express from "express";
const router = express.Router();
import * as UserController from "../app/controllers/UserController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as CategoryController from "../app/controllers/CategoryController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as WishListController from "../app/controllers/WishListController.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";

//Users
router.post("/Login", UserController.Login);
router.post("/VerifyLogin", UserController.VerifyLogin);
router.post("/CreateUserProfile", UserController.CreateUserProfile);
router.post("/UpdateUserProfile", UserController.UpdateUserProfile);
router.get("/ReadUserProfile", UserController.ReadUserProfile);

//Brand
router.get("/BrandList", BrandController.BrandList);

//Category
router.get("/CategoryList", CategoryController.CategoryList);

//Product
router.get(
  "/ProductListByCategory/:CategoryID",
  ProductController.ProductListByCategory
);
router.get(
  "/ProductListByRemark/:Remark",
  ProductController.ProductListByRemark
);
router.get(
  "/ProductListByBrand/:BrandID",
  ProductController.ProductListByBrand
);
router.get("/ProductListBySlider", ProductController.ProductListBySlider);
router.get(
  "/ProductDetailsById/:ProductID",
  ProductController.ProductDetailsById
);
router.get(
  "/ProductListByKeyword/:keyword",
  ProductController.ProductListByKeyword
);
router.get(
  "/ProductReviewListById/:ProductID",
  ProductController.ProductReviewListById
);
router.post("/CreateProductReview", ProductController.CreateProductReview);

//WishList
router.post("/CreateWish", WishListController.CreateWish);
router.get("/ReadWishList", WishListController.ReadWishList);
router.delete("/RemoveWish", WishListController.RemoveWish);

//CartList
router.post("/CreateCart", CartListController.CreateCart);
router.get("/ReadCart", CartListController.ReadCart);
router.post("/UpdateCart", CartListController.UpdateCart);
router.delete("/DeleteCart", CartListController.DeleteCart);

//Invoice
router.post("/CreateInvoice", InvoiceController.CreateInvoice);
router.get("/ReadInvoiceDetails", InvoiceController.ReadInvoiceDetails);
router.get("/ReadInvoiceList", InvoiceController.ReadInvoiceList);

export default router;
