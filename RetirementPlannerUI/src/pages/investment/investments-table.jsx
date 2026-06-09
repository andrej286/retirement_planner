import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteInvestment, updateInvestment} from "../../api/http-utils/investments";
import {Image} from "react-bootstrap";
import EditInvestmentForm from "./edit-investment-form";
import {formatNumber} from "../../common/util";
import {useTranslation} from "react-i18next";
import {EditButton} from "../../common/components/edit-button";
import {DeleteButton} from "../../common/components/delete-button";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 5px;
  margin-bottom: 50px;
`;

const StyledTableHeader = styled.th`
  background-color: #328fa8;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  letter-spacing: 1px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ccc;
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) td {
    background-color: #f2f2f2;
  }
  &:hover td {
    background-color: #e0f5ff;
  }
`;

const StyledTableCell = styled.td`
  background-color: #fff;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

export const InvestmentsTable = ({ investments, onSuccess }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const {t} = useTranslation();

  const handleDeleteInvestment = useCallback(async (id) => {
    await deleteInvestment(id)
    onSuccess()
  }, [onSuccess]);

  const handleEditInvestment = (investment) => {
    setSelectedInvestment(investment);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedInvestment({
      ...selectedInvestment,
      [name]: value,
    });
  };

  const handleCloseEditModal = () => {
    setSelectedInvestment(null);
    setShowEditModal(false);
  };

  const handleSubmitEditModal = async () => {
    await updateInvestment(selectedInvestment.id, selectedInvestment);
    onSuccess();
    handleCloseEditModal();
  };

  return (
    <>
    <StyledTable>
      <thead>
      <StyledTableRow>
        <StyledTableHeader>{t("section.investment.table.name")}</StyledTableHeader>
        <StyledTableHeader>{t("section.investment.table.initialAmount")}</StyledTableHeader>
        <StyledTableHeader>{t("section.investment.table.interest")}</StyledTableHeader>
        <StyledTableHeader>{t("section.investment.table.duration")}</StyledTableHeader>
        <StyledTableHeader>{t("section.investment.table.actions")}</StyledTableHeader>
      </StyledTableRow>
      </thead>
      <tbody>
      {investments.map((investment) => (
        <StyledTableRow key={investment.id}>
          <StyledTableCell>
            {investment.name}
          </StyledTableCell>
          <StyledTableCell>{formatNumber(investment.initialAmount, t('currency'))}</StyledTableCell>
          <StyledTableCell>{investment.interestRate} %</StyledTableCell>
          <StyledTableCell>{investment.duration} years</StyledTableCell>
          <StyledTableCell>
            <EditButton onClick={() => handleEditInvestment(investment)}/>
            <DeleteButton onClick={() => handleDeleteInvestment(investment.id)}/>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      </tbody>
    </StyledTable>
    <EditInvestmentForm
      show={showEditModal}
      investment={selectedInvestment}
      onHide={handleCloseEditModal}
      onChange={handleInputChange}
      onSubmit={handleSubmitEditModal}
    />
    </>
  );
};

