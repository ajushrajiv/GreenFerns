const { Router } = require("express");
const { PlantRouter } = require("./plantinfo");
const { UsersRouter } = require("./users");
const { AuthRouter } = require("./auth");
const authMiddleWare = require("../middlewares/AuthMiddleware")
const AppRouter = Router();
const logger = require("../services/logger/Logger")

AppRouter.use("/plantinfo", PlantRouter);
AppRouter.use("/users", authMiddleWare, UsersRouter);
AppRouter.use("/auth", AuthRouter);
AppRouter.use("/test", (req,res)=>{
    logger.debug("Hello");
    res.json({myLogLevel:process.env.LOG_LEVEL})
});

module.exports = { AppRouter };
