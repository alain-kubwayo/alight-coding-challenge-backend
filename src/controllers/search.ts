import { RequestHandler } from "express";
import { searchService } from "../services/search";

export const searchController: RequestHandler = async (req, res) => {
  const searchQuery = req.query.query as string;
  try {
    const results = await searchService(searchQuery);
    return res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
};
