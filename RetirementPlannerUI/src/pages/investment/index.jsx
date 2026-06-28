import React, {useEffect, useState} from 'react';
import {InvestmentsTable} from "./investments-table";
import InvestmentChart from "./investment-chart";
import AddInvestmentForm from "./add-investment-form";
import {fetchInvestments} from "../../api/http-utils/investments";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../AuthContext";

const Investment = () => {
  const [investments, setInvestments] = useState([]);
  const {t} = useTranslation();
  const {isGuest} = useAuth();

  const fetchAndSetInvestments = async () => {
    if (!isGuest) {
      const data = await fetchInvestments();
      setInvestments(data);
    }
  };

  useEffect(() => {
    fetchAndSetInvestments();
  }, []);

  return (
    <>
      <h1>{t("section.investment.title")}</h1>
      <InvestmentChart investments={investments} />
      <AddInvestmentForm setInvestments={setInvestments} onSuccess={fetchAndSetInvestments} isGuest={isGuest}/>
      <InvestmentsTable investments={investments} setInvestments={setInvestments} onSuccess={fetchAndSetInvestments} isGuest={isGuest}/>
    </>
  );
};

export default Investment;


