import axios from "axios";

export const fetchIncomes = async (userId) => {
  const response = await axios.get('http://localhost:8080/api/incomes', {
    params: {
      userId: userId
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
  return response.data;
};

export const createIncome = async (cost) => {
  await axios.post('http://localhost:8080/api/incomes', cost, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
};

export const deleteIncome = async (id) => {
  await axios.delete(`http://localhost:8080/api/incomes/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
};

export const updateIncome = async (id, updatedIncome) => {
  await axios.put(`http://localhost:8080/api/incomes/${id}`, updatedIncome, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
};