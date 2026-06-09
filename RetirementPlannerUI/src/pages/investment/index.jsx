import React, {useEffect, useState} from 'react';
import {InvestmentsTable} from "./investments-table";
import AddInvestmentForm from "./add-investment-form";
import {fetchInvestments} from "../../api/http-utils/investments";
import {useTranslation} from "react-i18next";

const Investment = () => {
  const [investments, setInvestments] = useState([]);
  const {t} = useTranslation();

  const fetchAndSetInvestments = async () => {
    const data = await fetchInvestments();
    setInvestments(data);
  };

  useEffect(() => {
    fetchAndSetInvestments();
  }, []);

  return (
    <>
      <h1>{t("section.investment.title")}</h1>
      <AddInvestmentForm onSuccess={fetchAndSetInvestments}/>
      <InvestmentsTable investments={investments} onSuccess={fetchAndSetInvestments}/>
    </>
  );
};

export default Investment;


