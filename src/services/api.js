import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const registerUser = async (userData) => {
  const { data } = await axios.post('/users/signup', userData);
  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.user.email);
};

export const loginUser = async (userData) => {
  const { data } = await axios.post('/users/login', userData);
  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.user.email);
};

export const logoutUser = async () => {
  await axios.post('/users/logout');
  localStorage.clear();
};

export const addContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return data;
};

export const getContacts = async () => {
  const { data } = await axios.get('/contacts', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return data;
};

export const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
