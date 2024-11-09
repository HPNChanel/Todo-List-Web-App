import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks/';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error("No token found"); // Gây lỗi nếu không có token
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getTasks = async () => {
  const authHeaders = getAuthHeaders();
  try {
    const response = await axios.get(API_URL, authHeaders);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      throw new Error("Unauthorized"); // Gây lỗi để component có thể điều hướng
    }
    throw error;
  }
};

export const createTask = async (task) => {
  const authHeaders = getAuthHeaders();
  try {
    const response = await axios.post(API_URL, task, authHeaders);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      throw new Error("Unauthorized");
    }
    throw error;
  }
};

export const updateTask = async (id, task) => {
  const authHeaders = getAuthHeaders();
  try {
    const response = await axios.put(`${API_URL}${id}/`, task, authHeaders);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      throw new Error("Unauthorized");
    }
    throw error;
  }
};

export const deleteTask = async (id) => {
  const authHeaders = getAuthHeaders();
  try {
    await axios.delete(`${API_URL}${id}/`, authHeaders);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      throw new Error("Unauthorized");
    }
    throw error;
  }
};
