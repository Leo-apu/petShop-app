import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const buscar = async (url, seData) => {
    const response = await api.get(url)
    seData(response.data)
}   