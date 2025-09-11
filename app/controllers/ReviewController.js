import { ReviewService } from "../service/ReviewService.js";

export const Review = async (req, res) => {
  let result = await ReviewService(req);
  return res.json(result);
};
