import axios from "axios"

const baseUrl = "http://localhost:8080"

export const createUser = async (user) =>{
    try {
        const response = await axios.post(baseUrl + "/users",user);
        return response.data
    } catch (error) {
        if(error.response.status===409){
            throw new Error("El email ingresado ya está en uso.")
        }
        throw error
    }
}