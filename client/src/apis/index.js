import axios from 'axios';
import { BASE_API_URL } from "../config/config"

// const API = axios.create({
//     baseURL: BASE_API_URL,
// })

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('accessToken')) {
//         req.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
//     }
//     return req;
// })

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const login = async (formData, history) => {
    try {
        const { data } = await axios.post(`${BASE_API_URL}/accounts/jwt/create`, formData, config);
        console.log(data);
        localStorage.setItem('accessToken', data.access);
        history.push("/time-table")
    } catch (error) {
        console.log(error)
    }
}


export const logout = (history) => {
    localStorage.removeItem('accessToken');
    history.push('/login')
}



export const getFaculty = async () => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/timetable/faculties`)
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

export const getSubjects = async () => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/timetable/subjects`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

export const getClasses = async () => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/timetable/classes`)
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

export const getDepartments = async () => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/timetable/departments`)
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}