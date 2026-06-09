import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const EditInvestmentForm = ({ show, investment, onHide, onChange, onSubmit }) => {
  const {t} = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t("section.investment.form.editTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {investment && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.investment.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={investment.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="initialAmount">
              <Form.Label>{t("section.investment.form.initialAmount")}</Form.Label>
              <Form.Control
                type="text"
                name="initialAmount"
                value={investment.initialAmount}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.investment.form.interest")}</Form.Label>
              <Form.Control
                type="text"
                name="interestRate"
                value={investment.interestRate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="duration">
              <Form.Label>{t("section.investment.form.duration")}</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                value={investment.duration}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t("section.investment.form.close")}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t("section.investment.form.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditInvestmentForm;

