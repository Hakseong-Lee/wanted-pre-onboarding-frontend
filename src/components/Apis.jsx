import axios from 'axios';

const address = `https://pre-onboarding-selection-task.shop/`;

export const signUpApi = (data) => {
  return axios.post(`${address}auth/signup`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const signInApi = (data) => {
  return axios.post(`${address}auth/signin`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const GetTodosApi = () => {
  return axios.get(`${address}todos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const CreateTodosApi = (data) => {
  return axios.post(`${address}todos`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const UpdateTodosApi = (todoId, data) => {
  return axios.put(`${address}todos/${todoId}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const DeleteTodosApi = (todoId) => {
  return axios.delete(`${address}todos/${todoId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
