import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks/';

export const getTasks = async (category = '') => {
    const url = category ? `${API_URL}?category=${category}` : API_URL;
    const response = await axios.get(url);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const updateTask = async (id, task) => {
    const response = await axios.put(`${API_URL}${id}/`, task);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
};
