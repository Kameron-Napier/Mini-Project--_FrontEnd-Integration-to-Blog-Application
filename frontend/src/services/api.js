import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const addPost = async (post) => {
    const response = await axios.post(`${API_URL}/posts`, post);
    return response.data;
};

export const updatePost = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/posts/${id}`, updatedData);
    return response.data;
};

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/posts/${id}`);
    return response.data;
};

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};

export const signin = async (credentials) => {
    const response = await axios.post(`${API_URL}/signin`, credentials);
    return response.data;
};
