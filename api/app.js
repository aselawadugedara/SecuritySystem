const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config()
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("Listening on Port " + PORT);
  });
  
  app.use(cors());
  app.use(bodyParser.json());
  
  
  
  const URL = process.env.MONGODB_URL;
  
  mongoose.connect(URL,{
      // useCreateIndex: true,
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      serverSelectionTimeoutMS: 5000
  });
  
  const connection = mongoose.connection;
  connection.once("open",() => {
      console.log("Mongodb Connection Success!");
  })
  