require("dotenv").config();
const express = require("express");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/contacts", contactRoutes);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.CONNECTON_STRING);
    await app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
