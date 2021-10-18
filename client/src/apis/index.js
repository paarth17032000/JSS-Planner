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


export const addLecture = async() => {
    // console.log(formData);
    var formData = new FormData();
        formData.append("classroom", "23");
        formData.append("time_slot", "2/");
        formData.append("subject", "KCS-552");
        formData.append("faculty", "KAB");
        formData.append("week_day", "Mon");
        formData.append("class", "4CS1"); 
    try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2OTU1NzkxLCJqdGkiOiI4YThlN2JhM2RhM2M0MjQ5OWRkNTQ0Mjg2YjljMWQ0NiIsInVzZXJfaWQiOjN9.9iugLpl90OTLWB8a9-AIbsniyEueLf0pj35QMp-uWS4");               

        // var requestOptions = {
        // method: 'POST',
        // headers: myHeaders,
        // body: formdata,
        // redirect: 'follow'
        // };
        console.log("FORM DATA", formData);
        const {data} = await axios.post(`${BASE_API_URL}/timetable/lectures/`,formData, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        console.log(data);
        return data;
    } catch (error) {
          console.log(error.message);
    }
}

// export const getLectures = async(faculty, class) => {
//     try {
//         const {data} = await axios.get(`${BASE_API_URL}/timetable/lectures?faculty=${faculty}&class=${class}/`,config)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const getLecutes = async(faculty, classroom) => {
    try {
        const {data} = await axios.get(`${BASE_API_URL}/timetable/lectures?faculty=${faculty}&class=${classroom}`,config);
        console.log("lectures", data);
        return data;
    } catch (error) {
       console.log("lecture error",error.message)
   }
}