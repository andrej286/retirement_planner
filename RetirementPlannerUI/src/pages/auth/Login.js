import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import {useAuth} from "../../AuthContext";
import './auth.css';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, continueAsGuest } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password
      });

      const { token, user } = response.data;
      login(token, user);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="auth-container">
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="auth-card">
            <Card.Body>
              <h2 className="text-center mb-12">{t('auth.login')}</h2>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>{t('auth.username')}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t('auth.usernamePlaceholder')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>{t('auth.password')}</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? t('auth.loggingIn') : t('auth.login')}
                </Button>
              </Form>

              <hr />

              <div className="text-center">
                <p>{t('auth.noAccount')}</p>
                <Button
                  variant="outline-primary"
                  className="w-100 mb-2"
                  onClick={() => navigate('/register')}
                >
                  {t('auth.register')}
                </Button>
              </div>

              <hr />

              <div className="text-center">
                <p>{t('auth.orContinueAsGuest')}</p>
                <Button
                  variant="outline-secondary"
                  className="w-100"
                  onClick={() => {
                    continueAsGuest();
                    navigate('/');
                  }}
                >
                  {t('auth.continueAsGuest')}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

