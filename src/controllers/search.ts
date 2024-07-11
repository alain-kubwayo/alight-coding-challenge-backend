import { RequestHandler } from "express";
import { searchService } from "../services/search";

export const searchController: RequestHandler = async (req, res) => {
  const searchQuery = req.query.q as string;
  if (searchQuery == null || !searchQuery.trim()) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }
  try {
    const results = await searchService(searchQuery);
    return res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
};
