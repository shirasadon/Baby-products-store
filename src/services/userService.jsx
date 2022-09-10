import httpService from "./httpService"

export const createUser=(user)=>{
return httpService.post("/user",user)
}



const userService = {
createUser
}

export default userService