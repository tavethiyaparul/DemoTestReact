import axios from "axios";

export const saveData = (empData) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = axios.post("http://localhost:3000/api/emp", empData, config)
    return res
}

export const getData = () => {
    const res = axios.get("http://localhost:3000/api/emp")
    return res
}

export const getDataId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/emp/${id}`)
    return res
}

export const deleteData = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/emp/${id}`)
    return res
}

export const updateData = async (id, empData) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`http://localhost:3000/api/emp/${id}`, empData, config)
    return res
}