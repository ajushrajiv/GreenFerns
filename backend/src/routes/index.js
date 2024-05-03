const { Router } = require("express");
const { PlantRouter } = require("./plantinfo");
const { UsersRouter } = require("./users");
const { AuthRouter } = require("./auth");

const AppRouter = Router();

AppRouter.use("/plantinfo", PlantRouter);
AppRouter.use("/users", UsersRouter);
AppRouter.use("/auth", AuthRouter);

module.exports = { AppRouter };
