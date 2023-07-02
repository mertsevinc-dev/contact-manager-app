require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    await app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
