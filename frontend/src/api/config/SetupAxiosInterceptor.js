import { getAccessToken } from "../../utils/TokenHandler";
import config from "./Config"


function SetupAxiosInterceptor(){
    config.interceptors.request.use((config) => {
        const token = getAccessToken();
        if(token) {
            config.headers["x-access-token"] = token;
        }else{
            console.log("token not available");
        }
        console.log("Interceptor header", config.headers);
        return config;
    })
}

export default SetupAxiosInterceptor;