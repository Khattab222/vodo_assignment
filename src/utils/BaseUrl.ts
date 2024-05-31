import axios from 'axios';


const baseurl = axios.create({baseURL: "https://api.themoviedb.org/3"});
export default baseurl;