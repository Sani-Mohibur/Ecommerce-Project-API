import express from "express";
const router = express.Router();
import * as UserController from "../app/controllers/UserController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as CategoryController from "../app/controllers/CategoryController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as WishListController from "../app/controllers/WishListController.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";
import * as ReviewController from "../app/controllers/ReviewController.js";
import authMiddleware from "../app/middleware/authMiddleware.js";

//Users
router.post("/Login", UserController.Login);
router.post("/VerifyLogin", UserController.VerifyLogin);
router.post(
  "/CreateUserProfile",
  authMiddleware,
  UserController.CreateUserProfile
);
router.post(
  "/UpdateUserProfile",
  authMiddleware,
  UserController.UpdateUserProfile
);
router.get("/ReadUserProfile", authMiddleware, UserController.ReadUserProfile);

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

//WishList
router.post("/CreateWish", authMiddleware, WishListController.CreateWish);
router.get("/ReadWishList", authMiddleware, WishListController.ReadWishList);
router.delete("/RemoveWish", authMiddleware, WishListController.RemoveWish);

//CartList
router.post("/CreateCart", authMiddleware, CartListController.CreateCart);
router.get("/ReadCart", authMiddleware, CartListController.ReadCart);
router.post("/UpdateCart", authMiddleware, CartListController.UpdateCart);
router.delete("/DeleteCart", authMiddleware, CartListController.DeleteCart);

//Invoice
router.post("/CreateInvoice", InvoiceController.CreateInvoice);
router.get("/ReadInvoiceDetails", InvoiceController.ReadInvoiceDetails);
router.get("/ReadInvoiceList", InvoiceController.ReadInvoiceList);

//Review
router.post("/CreateReview", authMiddleware, ReviewController.Review);
router.post("/UpdateReview", authMiddleware, ReviewController.Review);

export default router;
