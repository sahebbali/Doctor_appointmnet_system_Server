const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", userRoutes);

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in port ${process.env.PORT}`
      .bgCyan.white
  );
});
