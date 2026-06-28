import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {useAuth} from "../../AuthContext";
import axios from 'axios';
import './auth.css';

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(t('auth.passwordsDoNotMatch'));
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        email,
        password
      });

      const { token, user } = response.data;
      register(token, user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data || 'Registration failed. Please try again.');
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
              <h2 className="text-center mb-12">{t('auth.register')}</h2>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleRegister}>
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
                  <Form.Label>{t('auth.email')}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <Form.Group className="mb-3">
                  <Form.Label>{t('auth.confirmPassword')}</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder={t('auth.confirmPasswordPlaceholder')}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? t('auth.registering') : t('auth.register')}
                </Button>
              </Form>

              <hr />

              <div className="text-center">
                <p>{t('auth.alreadyHaveAccount')}</p>
                <Button
                  variant="outline-primary"
                  className="w-100"
                  onClick={() => navigate('/login')}
                >
                  {t('auth.login')}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

