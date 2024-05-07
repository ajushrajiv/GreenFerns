const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const GreenFernsSequelize = require("../../database/setup/database");
const UserModel = require("../../database/models/UserModel");
const { where } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10; 
const AccessToken = require("../../services/auth/AccessToken")

const AuthRouter = Router();

//VALIDATE USER
AuthRouter.post("/login", async (req, res) => {
const { email, password } = req.body;
if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
}

try {
    const user = await UserModel.scope("allData").findOne({ where: { email } });

    //bcrypt.compareSync is used to compare the entered password with the stored hashed password.
    if (user && bcrypt.compareSync(password, user.password)) {
        //jwt token creation
        user.password = null
        const newToken = AccessToken.createAccessToken(user.id);
        res.status(StatusCodes.OK).json({ user, tokens:{ accessToken: newToken } });
    } else {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    }
} catch (e) {
    console.log("Error validating user", e);
}
});

//    CREATE USER
AuthRouter.post("/signup", async (req, res) => {
const { username, password, email } = req.body;

if (!username || !password || !email) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Missing fields" });
    return;
}

// Check if the email is in correct format
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
if (!emailRegex.test(email)) {
    res.status(StatusCodes.BAD_REQUEST).json({error:"Invalid email format"});
    return;
}

// Check if the username starts with a number
if (!isNaN(username[0])) {
    res
    .status(StatusCodes.BAD_REQUEST)
    .json({error:"Username should not start with a number"});
    return;
}

try {
    //check if email and username already exists
    const exitingEmail = await UserModel.findOne({ where: { email } });
    const exitingUsername = await UserModel.findOne({ where: { username } });

    if (exitingEmail) {
    res.status(StatusCodes.CONFLICT).json({ error:"Email already exists"});
    return;
    } else if (exitingUsername) {
    res.status(StatusCodes.CONFLICT).json({error: "Username already exists"});
    return;
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const newUser = await UserModel.create({
    username,
    password: hashedPassword,
    email,
    });
    newUser.password = null;
    //token generation
    const newToken = AccessToken.createAccessToken(newUser.id);

    res.status(StatusCodes.CREATED).json({ user: newUser, tokens: { accessToken: newToken } });
} catch (e) {
    console.error("Error occurred creating user", e);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
}
});

module.exports = { AuthRouter };