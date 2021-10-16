import axios from "axios"
import { BASE_API_URL } from "../../config/config"

export const LoginUser = async (user) => {
    try{
        const req = {
            email: user.email,
            password: user.password
        }
        const url = `${BASE_API_URL}/accounts/jwt/create/`;
        const response = await axios.post(url, req)
        if(response) {localStorage.setItem('access_token', response.data.access)}
        return response.data
    } catch(error){
        return error.message
    }
}