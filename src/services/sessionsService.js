import axios from "axios"

const baseUrl = "http://localhost:8080"

export const createSession = async (credentials) =>{
    try {
        const response = await axios.post(baseUrl + "/sessions",credentials);
        return response.data.token
    } catch (error) {
        throw error
    }
}

export const getSession = async (token) =>{
    try {
        const response = await axios.get(baseUrl + "/session",{headers: {
            'Authorization': 'Bearer '+ token
        }});
        return response.data.userID
    } catch (error) {
        throw error
    }
}