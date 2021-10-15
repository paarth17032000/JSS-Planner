import axios from "axios"
import { BASE_API_URL } from "../../config/config"

export const LoginUser = async (user) => {
    try{
        const req = {
            email: user.email,
            password: user.password
        }
        const url = `${BASE_API_URL}/accounts/jwt/create/`;
        const header = { 'Content-Type': 'application/json' };
        const response = await axios.post(url, req, {
            headers: header
        })
    
        console.log(response)
    }catch(error){
        console.log(error)
    }
}