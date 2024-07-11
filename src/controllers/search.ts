import { RequestHandler } from "express";
import { searchService } from "../services/search";

export const searchController: RequestHandler = async (req, res) => {
  const searchQuery = req.query.searchQuery as string;
  try {
    const results = await searchService(searchQuery);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
};
