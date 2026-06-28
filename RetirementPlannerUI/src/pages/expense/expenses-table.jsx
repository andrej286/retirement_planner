import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteExpense, updateExpense} from "../../api/http-utils/expenses";
import {Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import EditExpenseForm from "./edit-expense-form";
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
  background-color: #ff9800;
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
    background-color: #ffedcc;
  }
`;

const StyledTableCell = styled.td`
  background-color: #fff;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

export const ExpensesTable = ({ expenses, setExpenses, onSuccess, isGuest }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const {t} = useTranslation();

  const handleDeleteExpense = useCallback(async (expense) => {
    if (isGuest) {
      setExpenses(prev => prev.filter(prevItem => prevItem.id !== expense.id));
    } else {
      await deleteExpense(expense.id)
      onSuccess()
    }
  }, [onSuccess]);

  const handleEditExpense = (expense) => {
    setSelectedExpense(expense);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedExpense({
      ...selectedExpense,
      [name]: value,
    });
  };

  const handleCloseEditModal = () => {
    setSelectedExpense(null);
    setShowEditModal(false);
  };

  const handleSubmitEditModal = async () => {
    if (isGuest) {
      setExpenses(prevItems =>
        prevItems.map(item =>
          item.id === selectedExpense.id
            ? { ...item, ...selectedExpense } // Creates a new object with updates
            : item                              // Returns unchanged object
        ));
    } else {
      await updateExpense(selectedExpense.id, selectedExpense);
      onSuccess();
    }
    handleCloseEditModal();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <>
    <StyledTable>
      <thead>
      <StyledTableRow>
        <StyledTableHeader>{t("section.expense.table.name")}</StyledTableHeader>
        <StyledTableHeader>{t("section.expense.table.monthlyValue")}</StyledTableHeader>
        <StyledTableHeader>{t("section.expense.table.startDate")}</StyledTableHeader>
        <StyledTableHeader>{t("section.expense.table.terminationDate")}</StyledTableHeader>
        <StyledTableHeader>{t("section.expense.table.interest")}</StyledTableHeader>
        <StyledTableHeader>{t("section.expense.table.actions")}</StyledTableHeader>
      </StyledTableRow>
      </thead>
      <tbody>
      {expenses.map((expense) => (
        <StyledTableRow key={expense.id}>
          <StyledTableCell>
            {expense.name}
            {expense.description &&
              <OverlayTrigger key="top" placement="top" overlay={<Tooltip>{expense.description}</Tooltip>}>
                <Image width="22" src="/images/info-icon.svg" roundedCircle fluid className="ms-1"/>
              </OverlayTrigger>
            }
          </StyledTableCell>
          <StyledTableCell>{formatNumber(expense.annualMonthlyValue, t('currency'))}</StyledTableCell>
          <StyledTableCell>{formatDate(expense.startDate)}</StyledTableCell>
          <StyledTableCell>{formatDate(expense.terminationDate)}</StyledTableCell>
          <StyledTableCell>{expense.interestRate} %</StyledTableCell>
          <StyledTableCell>
            <EditButton onClick={() => handleEditExpense(expense)}/>
            <DeleteButton onClick={() => handleDeleteExpense(expense)}/>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      </tbody>
    </StyledTable>
    <EditExpenseForm
      show={showEditModal}
      expense={selectedExpense}
      onHide={handleCloseEditModal}
      onChange={handleInputChange}
      onSubmit={handleSubmitEditModal}
    />
    </>
  );
};

