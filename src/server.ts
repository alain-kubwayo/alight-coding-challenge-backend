import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, welcome to the app API");
});

app.listen(PORT, () => {
  console.log("App listenning...");
});
