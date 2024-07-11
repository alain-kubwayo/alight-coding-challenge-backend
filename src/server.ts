import "dotenv/config";
import express from "express";
import { searchController } from "./controllers/search";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/search", searchController);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
