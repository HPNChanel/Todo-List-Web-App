import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks/';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getTasks = async (navigate) => {
  const authHeaders = getAuthHeaders();
  if (!authHeaders) {
    navigate('/login');
    return;
  }
  try {
    const response = await axios.get(API_URL, authHeaders);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {  // Chuyển hướng khi nhận lỗi 401
      localStorage.removeItem('token');
      navigate('/login');
    }
    throw error;
  }
};

export const createTask = async (task, navigate) => {
  const authHeaders = getAuthHeaders();
  if (!authHeaders) {
    navigate('/login');
    return;
  }
  try {
    const response = await axios.post(API_URL, task, authHeaders);
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
  const authHeaders = getAuthHeaders();
  if (!authHeaders) {
    navigate('/login');
    return;
  }
  try {
    const response = await axios.put(`${API_URL}${id}/`, task, authHeaders);
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
  const authHeaders = getAuthHeaders();
  if (!authHeaders) {
    navigate('/login');
    return;
  }
  try {
    await axios.delete(`${API_URL}${id}/`, authHeaders);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      navigate('/login');
    }
    throw error;
  }
};
