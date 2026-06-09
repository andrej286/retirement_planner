import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { formatNumber } from '../../common/util';
import './tax-savings.css';

const TaxSavings = () => {
  const { t } = useTranslation();

  const [thirdPillarContribution, setThirdPillarContribution] = useState(7000);
  const [taxRate, setTaxRate] = useState(25);

  // Calculate tax savings
  const taxSavings = Math.round(thirdPillarContribution * (taxRate / 100));
  const netContribution = thirdPillarContribution - taxSavings;

  // Chart data for tax savings
  const chartOptions = {
    chart: {
      type: 'bar',
      height: '100%'
    },
    xaxis: {
      categories: ['3rd Pillar Contribution']
    },
    title: {
      text: t('calculator.taxSavings.title'),
      align: 'center'
    },
    colors: ['#FF6B6B', '#51CF66'],
    legend: {
      position: 'bottom'
    }
  };

  const chartSeries = [
    {
      name: 'Tax Savings',
      data: [taxSavings]
    },
    {
      name: 'Net Contribution',
      data: [netContribution]
    }
  ];

  return (
    <Container className="tax-savings-container py-5">
      <div className="mb-4">
        <Link to="/home" className="btn btn-secondary btn-sm">
          ← Back to Home
        </Link>
      </div>

      <h1 className="mb-4">Tax Savings Calculator - 3rd Pillar</h1>

      <Row>
        <Col lg={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Calculate Your Tax Savings</Card.Title>
              <Card.Text className="text-muted">
                Find out how much you can save on taxes by investing in the 3rd pillar (voluntary private pension).
              </Card.Text>

              <InputGroup className="mb-3">
                <InputGroup.Text>{t('calculator.invest.initialAmount')}</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={thirdPillarContribution}
                  onChange={(e) => setThirdPillarContribution(parseInt(e.target.value) || 0)}
                  min="0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Tax Rate (%):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseInt(e.target.value) || 0)}
                  min="0"
                  max="100"
                />
              </InputGroup>

              <div className="mt-4">
                <p className="mb-2">
                  <strong>Annual 3rd Pillar Contribution:</strong> {formatNumber(thirdPillarContribution, t('currency'))}
                </p>
                <p className="mb-2">
                  <strong>Estimated Tax Rate:</strong> {taxRate}%
                </p>
                <p className="mb-2">
                  <strong>Tax Savings:</strong>
                  <span className="text-success ms-2" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {formatNumber(taxSavings, t('currency'))}
                  </span>
                </p>
                <p className="mb-0">
                  <strong>Net Contribution (After Tax):</strong> {formatNumber(netContribution, t('currency'))}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={350}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h5>About the 3rd Pillar</h5>
              <p>
                The 3rd pillar represents voluntary private pension savings. It offers tax advantages as contributions
                are often tax-deductible up to certain limits. This calculator estimates the potential tax savings from
                investing in the 3rd pillar based on your income and tax bracket.
              </p>
              <p className="mb-0">
                <small className="text-muted">
                  Note: Tax savings vary by country and region. Consult with a tax professional for accurate calculations.
                </small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaxSavings;

