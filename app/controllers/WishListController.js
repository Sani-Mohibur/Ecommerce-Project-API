import {
  CreateWishService,
  ReadWishListService,
  RemoveWishService,
} from "../service/WishListService.js";

export const CreateWish = async (req, res) => {
  let result = await CreateWishService(req);
  return res.json(result);
};

export const ReadWishList = async (req, res) => {
  let result = await ReadWishListService(req);
  return res.json(result);
};

export const RemoveWish = async (req, res) => {
  let result = await RemoveWishService(req);
  return res.json(result);
};
