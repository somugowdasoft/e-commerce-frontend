//import axios
import axios from "axios";

//set the base URL for axios
const apiUrl = axios.create({
    baseURL: process.env.REACT_APP_API
})

export default apiUrl;