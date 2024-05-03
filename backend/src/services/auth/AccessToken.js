const jwt = require("jsonwebtoken");

const {  ACCESS_TOKEN_SECRET } = process.env;

function createAccessToken(userId){
    return jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: "24h" });
    
}

function decodeAccessToken(accessToken) {
    return jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
}

module.exports = { createAccessToken, decodeAccessToken };