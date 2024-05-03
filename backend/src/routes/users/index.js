const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const UsersRouter = Router();

UsersRouter.get("/currentuser", (req, res) => {
    const UserId = parseInt(req.query.UserId);
    if (!UserId) {
      res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
      return;
    }
    const User_weather = user.find((item) => item.id === UserId);
    res.status(StatusCodes.OK).json({ user: User_weather });
});
  
module.exports = { UsersRouter };