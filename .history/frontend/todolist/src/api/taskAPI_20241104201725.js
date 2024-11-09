import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks/';

//* Declare API Function for tasks

export const getTasks = async () => {
  const response = await axios.get(API_URL)
}

export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data
}