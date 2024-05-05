const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const GreenFernsSequelize = require("../../database/setup/database");
const UserModel = require("../../database/models/UserModel");

const UsersRouter = Router();

UsersRouter.get("/currentuser", async(req, res) => {
    const userId = req.user.userId;
    
    console.log("USERIIDD", userId)
    if (!userId) {
      res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
      return;
    }

    const user = await UserModel.findOne({ where: { id: userId } });
    res.status(StatusCodes.OK).json({ user });
});
  
module.exports = { UsersRouter };