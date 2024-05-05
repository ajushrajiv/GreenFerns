import { saveAccessTokens } from "../../../utils/TokenHandler";
import api from "../../config/Config"

async function currentLoginUser(email, password){

    const result = await api.post("/auth/login",{
        email,password
    },{
        headers: {
            'Content-Type': 'application/json' // Set Content-Type to JSON
        }
    } );
    console.log("RESULT LOGINUSER",result.data);

    const { user, tokens } = result.data;
    const accessToken = tokens.accessToken;
    saveAccessTokens(accessToken);
    console.log("SAVe ACCESS TOKENS",  accessToken)
    return { user, accessToken };
}


async function verifyAccessToken(accessToken) {
    try {
        const response = await api.post("/users/currentuser", {
            accessToken
        });
        // Assuming the server returns user data if the token is valid
        const user = response.data.user;
        return { user };
    } catch (error) {
        // Handle error (e.g., token expired, invalid token)
        throw new Error("Failed to verify access token");
    }
}

export default { currentLoginUser, verifyAccessToken };