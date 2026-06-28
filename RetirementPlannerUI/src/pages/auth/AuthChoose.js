import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {useAuth} from "../../AuthContext";
import './auth.css';

const AuthChoose = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { continueAsGuest } = useAuth();

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="auth-card">
            <Card.Body>
              <div className="text-center mb-4">
                <h1 className="mb-2">{t('auth.welcome')}</h1>
                <p className="text-muted">{t('auth.welcomeMessage')}</p>
              </div>

              <div className="d-grid gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/login')}
                >
                  {t('auth.login')}
                </Button>

                <Button
                  variant="outline-primary"
                  size="lg"
                  onClick={() => navigate('/register')}
                >
                  {t('auth.register')}
                </Button>

                <hr className="my-4" />

                <div>
                  <p className="text-center text-muted mb-3">
                    {t('auth.tryWithoutAccount')}
                  </p>
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="w-100"
                    onClick={() => {
                      continueAsGuest();
                      navigate('/home');
                    }}
                  >
                    {t('auth.continueAsGuest')}
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthChoose;

