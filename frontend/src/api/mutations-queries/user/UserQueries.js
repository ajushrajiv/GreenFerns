import api from "../../config/Config"

async function currentUser(){
    const result = await api.get("/users/currentuser");
    console.log("RESULT CURRENTUSER",result)
    return result.data;
}

export default { currentUser };