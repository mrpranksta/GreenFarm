import axios, { AxiosResponse } from "axios";

const serverUrl = 'http://localhost:8000/api/v1'

export async function getLinkToGoogle() {
    try {
        const response = await axios.get(`${serverUrl}/auth/google/login`, {
          headers: {
            accept: '/',
          }
        });
       
      } catch (err) {
        console.error(`Error at handleLogin: ${err}`);
      }
    const res = `${serverUrl}/api/v1/auth/google/login`;
    return res
}  