import axios from "axios";

export const fetchExpenses = async () => {
  const response = await axios.get('http://localhost:8080/api/expenses', {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
  return response.data;
};

export const createExpense = async (expense) => {
  await axios.post('http://localhost:8080/api/expenses', expense, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
};

export const deleteExpense = async (id) => {
  await axios.delete(`http://localhost:8080/api/expenses/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
};

export const updateExpense = async (id, updatedExpense) => {
  await axios.put(`http://localhost:8080/api/expenses/${id}`, updatedExpense, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("token")
    }});
};

