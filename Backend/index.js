const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/songsFetch");
const seedSongs = require("./model/seedSongs");
require("dotenv").config(); 

const app = express();
const port = process.env.PORT || 5000; 
const url = process.env.MongoDB_URL || "mongodb://localhost:27017/music"; 

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connection established....");
    seedSongs();
  })
  .catch((e) => {
    console.log("Connection error:", e);
  });

app.use(express.json());


app.use(router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
