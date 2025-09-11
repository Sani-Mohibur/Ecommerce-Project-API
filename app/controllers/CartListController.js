import {
  CreateCartService,
  DeleteCartService,
  ReadCartService,
  UpdateCartService,
} from "../service/CartListService.js";

export const CreateCart = async (req, res) => {
  let result = await CreateCartService(req);
  return res.json(result);
};

export const ReadCart = async (req, res) => {
  let result = await ReadCartService(req);
  return res.json(result);
};

export const UpdateCart = async (req, res) => {
  let result = await UpdateCartService(req);
  return res.json(result);
};

export const DeleteCart = async (req, res) => {
  let result = await DeleteCartService(req);
  return res.json(result);
};
