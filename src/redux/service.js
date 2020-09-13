import Axios from 'axios';

console.error("______ process.env.NODE_ENV ____", process.env.NODE_ENV)
let base_url = `https://demo.cloudmatos.dev`;

if (process.env.NODE_ENV !== "development") {
    base_url = `https://demo.cloudmatos.dev`;
}

let axios = Axios.create({
    baseURL: base_url,  //YOUR_API_URL HERE
    headers: {
        'Content-Type': 'application/json',
    }
});

const token = JSON.parse(localStorage.getItem('token'));
console.error("__ token __", token);
axios.defaults.headers.common['Authorization'] = "Bearer " + token;

export function getScheduleList(){
    
}

export default axios;
