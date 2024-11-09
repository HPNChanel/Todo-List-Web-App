import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks/';

//* Declare API Function for tasks

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}${id}/`, task)
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}${id}/`)
}
