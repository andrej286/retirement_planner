import axios from "axios";

export const fetchInvestments = async () => {
  const response = await axios.get('http://localhost:8080/api/investments', {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      // 'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
  return response.data;
};

export const createInvestment = async (investment) => {
  await axios.post('http://localhost:8080/api/investments', investment, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      // 'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const deleteInvestment = async (id) => {
  await axios.delete(`http://localhost:8080/api/investments/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      // 'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const updateInvestment = async (id, updatedInvestment) => {
  await axios.put(`http://localhost:8080/api/investments/${id}`, updatedInvestment, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      // 'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

