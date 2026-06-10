import React, {useEffect, useState} from 'react';
import {ExpensesTable} from "./expenses-table";
import ExpenseChart from "./expense-chart";
import AddExpenseForm from "./add-expense-form";
import {fetchExpenses} from "../../api/http-utils/expenses";
import {useTranslation} from "react-i18next";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const {t} = useTranslation();

  const fetchAndSetExpenses = async () => {
    const data = await fetchExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchAndSetExpenses();
  }, []);

  return (
    <>
      <h1>{t("section.expense.title")}</h1>
      <ExpenseChart expenses={expenses} />
      <AddExpenseForm onSuccess={fetchAndSetExpenses}/>
      <ExpensesTable expenses={expenses} onSuccess={fetchAndSetExpenses}/>
    </>
  );
};

export default Expense;


