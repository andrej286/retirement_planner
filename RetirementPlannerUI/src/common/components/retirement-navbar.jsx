import React, { useState} from 'react';
import {Container, Navbar, Nav, Button, Offcanvas, Image, Row, Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {EXPENSE_PAGE, HOME_PAGE, INCOME_PAGE, INVESTMENT_PAGE} from "../../routes";

export const RetirementNavbar = ({handleLocaleChange}) => {
  const [show, setShow] = useState(false);
  const [personInfo, setPersonInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <Navbar bg="danger" variant="dark" data-bs-theme="dark">
      <Container>
        <Row className="w-100">
          <Col className="d-flex align-items-center">
            <Navbar.Brand href={HOME_PAGE.path}>
              {t("header.title")}
              <Image src="/images/piggy-bank.png" width="50" className="me-3" fluid/>
            </Navbar.Brand>
            <Nav className="me-auto" activeKey={location.pathname}>
              <Nav.Link href={HOME_PAGE.path}>{t("header.home")}</Nav.Link>
              <Nav.Link href={EXPENSE_PAGE.path}>{t("header.expenses")}</Nav.Link>
              <Nav.Link href={INCOME_PAGE.path}>{t("header.incomes")}</Nav.Link>
              <Nav.Link href={INVESTMENT_PAGE.path}>{t("header.investment")}</Nav.Link>
            </Nav>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <Button variant="danger" className="fs-6 align-middle" onClick={() => handleLocaleChange("mk")}>
              <Image src="/images/macedonia-flag.png" width="30" fluid className="bg-white" roundedCircle/>
            </Button>
            <Button variant="danger" className="fs-6 align-middle" onClick={() => handleLocaleChange("en")}>
              <Image src="/images/uk-flag.png" width="30" fluid className="bg-white" roundedCircle/>
            </Button>
            <Button variant="danger" onClick={() => {}} className="me-2">
              <Image src="/images/user.svg" width="30" fluid className="bg-white" roundedCircle/>
            </Button>
          </Col>
        </Row>
        <Offcanvas show={show} onHide={() => {}} placement={"end"} name={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("header.userInfo")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>{personInfo.name}</div>
            <div>{personInfo.email}</div>
            <br/>
            <Button className="fs-6 align-middle" variant="danger" onClick={() => {}}>{t("header.logOut")}</Button>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
