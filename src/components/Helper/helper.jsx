import axios from 'axios';
const BASEURL="http://localhost:8000/api/v1";

export const signingIn=async (details)=>{
    console.log(details);
    const response=await axios.post(BASEURL+'/admin/signIn', {
        firstName: 'Finn',
        lastName: 'Williams'
      },{
        headers: {
            'Content-Type': 'application/json',
        },})
      .then((response) => {
        console.log(response);
        return (response);
      }, (error) => {
        console.log(error);
        return null;
        alert("Unable to login");
      });
};

export const getUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post('/users', user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/users/${id}`);
  return response.data;
};


