const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const comicsRoute = require("./routes/comics");
app.use(comicsRoute);

app.get("/", (req, res) => {
  res.json({ message: "Server Ok" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
