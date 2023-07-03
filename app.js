require("dotenv").config();
const express = require("express");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/v1/contacts", contactRoutes);
app.use("/api/v1/users", userRoutes);
app.use(errorHandler);

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
