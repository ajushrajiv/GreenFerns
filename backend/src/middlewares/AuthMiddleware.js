const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const AccessToken = require("../services/auth/AccessToken");

function authMiddleWare(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(StatusCodes.FORBIDDEN).send("No Token provided!");
  }
  try {
    const decodedAccessToken = AccessToken.decodeAccessToken(token);
    req.user = decodedAccessToken;
    // Check if the decoded user ID matches the user making the request
    if (decodedAccessToken.userId !== req.user.userId) {
      return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized access");
    }    
  } catch (e) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send("Something is wrong with your token");
  }
  return next();
}

module.exports = authMiddleWare;