export function saveAccessTokens(accessToken){
    try {
        localStorage.setItem("accessToken", accessToken);
        console.log("Access token saved successfully:", accessToken);
    } catch (error) {
        console.error("Error saving access token:", error);
    }
}

export function getAccessToken(){
    return localStorage.getItem("accessToken");
}

export function deleteAccessToken(){
   localStorage.removeItem("accessToken");
}

export function setAccessToken(accessToken) {
    return saveAccessTokens(accessToken);
}

