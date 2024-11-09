import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks/';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getTasks = async (navigate) => {
  try {
    const response = await axios.get(API_URL, getAuthHeaders());
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      navigate('/login'); // Sử dụng navigate được truyền vào từ component
    }
    throw error;
  }
};

export const createTask = async (task, navigate) => {
  try {
    const response = await axios.post(API_URL, task, getAuthHeaders());
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    }
    throw error;
  }
};

export const updateTask = async (id, task, navigate) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, task, getAuthHeaders());
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    }
    throw error;
  }
};

export const deleteTask = async (id, navigate) => {
  try {
    await axios.delete(`${API_URL}${id}/`, getAuthHeaders());
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    }
    throw error;
  }
};
