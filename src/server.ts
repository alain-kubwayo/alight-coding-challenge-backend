import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { searchController } from "./controllers/search";
import swaggerDocument from "./docs/swagger.json";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/search", searchController);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
