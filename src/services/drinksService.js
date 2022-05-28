import axios from "axios"

const baseUrl = "http://localhost:8080"

export const getDrinks = async () =>{
    try {
        const response = await axios.get(baseUrl + "/drinks");
        return response.data
    } catch (error) {
        throw error
    }
}