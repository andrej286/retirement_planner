import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createInvestment } from "../../api/http-utils/investments";
import {useTranslation} from "react-i18next";
import {AddButton} from "../../common/components/add-button";

const AddInvestmentForm = ({ setInvestments, onSuccess, isGuest }) => {
  const [show, setShow] = useState(false);
  const {t} = useTranslation();
  const [values, setValues] = useState({
    name: '',
    initialAmount: '',
    interestRate: '',
    duration: '',
  });

  const handleClose = () => {
    setShow(false);
    setValues({
      name: '',
      initialAmount: '',
      interestRate: '',
      duration: '',
    })
  }
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (isGuest) {
      const newInvestment = {...values, id: Math.random()};
      setInvestments(prev => [...prev, newInvestment]);
    } else {
      await createInvestment(values);
      onSuccess();
    }
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleShow} text={t("section.investment.form.addTitle")}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("section.investment.form.addTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.investment.form.name")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("section.investment.form.namePlaceholder")}
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="initialAmount">
              <Form.Label>{t("section.investment.form.initialAmount")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("section.investment.form.initialAmountPlaceholder")}
                name="initialAmount"
                value={values.initialAmount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.investment.form.interest")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("section.investment.form.interestPlaceholder")}
                name="interestRate"
                value={values.interestRate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="duration">
              <Form.Label>{t("section.investment.form.duration")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("section.investment.form.durationPlaceholder")}
                name="duration"
                value={values.duration}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("section.investment.form.close")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t("section.investment.form.save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddInvestmentForm;

