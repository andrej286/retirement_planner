import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const EditExpenseForm = ({ show, expense, onHide, onChange, onSubmit }) => {
  const {t} = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t("section.expense.form.editTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {expense && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.expense.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={expense.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.expense.form.description")}</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={expense.description}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="annualMonthlyValue">
              <Form.Label>{t("section.expense.form.monthlyValue")}</Form.Label>
              <Form.Control
                type="text"
                name="annualMonthlyValue"
                value={expense.annualMonthlyValue}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>{t("section.expense.form.startDate")}</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={new Date(expense.startDate).toLocaleDateString()}
                placeholder={new Date(expense.startDate).toLocaleDateString()}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="terminationDate">
              <Form.Label>{t("section.expense.form.terminationDate")}</Form.Label>
              <Form.Control
                type="date"
                name="terminationDate"
                value={expense.terminationDate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.expense.form.interest")}</Form.Label>
              <Form.Control
                type="text"
                name="interestRate"
                value={expense.interestRate}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t("section.expense.form.close")}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t("section.expense.form.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditExpenseForm;

