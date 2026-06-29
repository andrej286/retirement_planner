import React, {useEffect, useState} from 'react';
import {ExpensesTable} from "./expenses-table";
import ExpenseChart from "./expense-chart";
import AddExpenseForm from "./add-expense-form";
import {fetchExpenses} from "../../api/http-utils/expenses";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../AuthContext";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const {t} = useTranslation();
  const {isGuest} = useAuth();

  const fetchAndSetExpenses = async () => {
    if (!isGuest) {
      const user = JSON.parse(localStorage.getItem('user'));
      const data = await fetchExpenses(user.userID);

      setExpenses(data);
    }
  };

  useEffect(() => {
    fetchAndSetExpenses();
  }, []);

  return (
    <>
      <h1>{t("section.expense.title")}</h1>
      <ExpenseChart expenses={expenses} />
      <AddExpenseForm setExpenses={setExpenses} onSuccess={fetchAndSetExpenses} isGuest={isGuest}/>
      <ExpensesTable expenses={expenses} setExpenses={setExpenses} onSuccess={fetchAndSetExpenses} isGuest={isGuest}/>
    </>
  );
};

export default Expense;


