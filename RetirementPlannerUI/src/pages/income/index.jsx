import React, {useEffect, useState} from 'react';
import {IncomesTable} from "./incomes-table";
import AddIncomeForm from "./add-income-form";
import IncomesChart from "./incomes-chart";
import {fetchIncomes} from "../../api/http-utils/incomes";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../AuthContext";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const {t} = useTranslation();
  const {isGuest} = useAuth();

  const fetchAndSetIncomes = async () => {
    if (!isGuest) {
      const user = JSON.parse(localStorage.getItem('user'));
      const data = await fetchIncomes(user.userID);
      setIncomes(data);
    }
  };

  useEffect(() => {
    fetchAndSetIncomes();
  }, []);

  return (
    <>
      <h1>{t("section.income.title")}</h1>
      <IncomesChart incomes={incomes} />
      <AddIncomeForm setIncomes={setIncomes} onSuccess={fetchAndSetIncomes} isGuest={isGuest}/>
      <IncomesTable incomes={incomes} setIncomes={setIncomes} onSuccess={fetchAndSetIncomes} isGuest={isGuest}/>
    </>
  );
};

export default Income;