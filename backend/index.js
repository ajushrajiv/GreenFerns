const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const GreenFernsSequelize = require("./src/database/setup/database");
const { AppRouter } = require("./src/routes");

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

app.use(cors());

GreenFernsSequelize.sync()
  .then(() => {
    console.log("Connected DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/v1", AppRouter);

app.listen(PORT, () => {
  console.log(`GreenFerns listening on port ${PORT}`);
});

