import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { formatNumber } from '../../common/util';
import './savings.css';

const Savings = () => {
  const { t } = useTranslation();

  const [monthlyIncome, setMonthlyIncome] = useState(4000);
  const [savingsPercentage, setSavingsPercentage] = useState(20);
  const [yearsToRetirement, setYearsToRetirement] = useState(30);
  const [interestRate, setInterestRate] = useState(3);

  // Calculate savings
  const monthlyContribution = Math.round(monthlyIncome * (savingsPercentage / 100));
  const annualContribution = monthlyContribution * 12;

  // Calculate future value with compound interest
  const calculateFutureValue = () => {
    let balance = 0;
    const yearData = [];
    const yearLabels = [];

    for (let year = 1; year <= yearsToRetirement; year++) {
      balance = balance * (1 + interestRate / 100) + annualContribution;
      yearData.push(Math.round(balance));
      yearLabels.push(`Year ${year}`);
    }

    return { yearData, yearLabels, totalSavings: balance };
  };

  const { yearData, yearLabels, totalSavings } = calculateFutureValue();

  const chartOptions = {
    chart: {
      type: 'area',
      height: '100%',
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: yearLabels,
      title: {
        text: 'Years'
      }
    },
    yaxis: {
      title: {
        text: `Value (${t('currency')})`
      },
      labels: {
        formatter: function (value) {
          return formatNumber(Math.round(value), t('currency'));
        }
      }
    },
    title: {
      text: 'Savings Growth Over Time',
      align: 'center'
    },
    colors: ['#51CF66'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      }
    },
    stroke: {
      curve: 'smooth'
    }
  };

  const chartSeries = [
    {
      name: 'Total Savings',
      data: yearData
    }
  ];

  return (
    <Container className="savings-container py-5">
      <div className="mb-4">
        <Link to="/home" className="btn btn-secondary btn-sm">
          ← Back to Home
        </Link>
      </div>

      <h1 className="mb-4">Savings Calculator</h1>

      <Row>
        <Col lg={5} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Calculate Your Savings</Card.Title>
              <Card.Text className="text-muted">
                Estimate how much you will save each year until retirement with compound interest.
              </Card.Text>

              <InputGroup className="mb-3">
                <InputGroup.Text>Monthly Income (€):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(parseInt(e.target.value) || 0)}
                  min="0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Savings Rate (%):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={savingsPercentage}
                  onChange={(e) => setSavingsPercentage(parseInt(e.target.value) || 0)}
                  min="0"
                  max="100"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Years to Retirement:</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={yearsToRetirement}
                  onChange={(e) => setYearsToRetirement(parseInt(e.target.value) || 0)}
                  min="1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Annual Interest Rate (%):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.1"
                />
              </InputGroup>

              <div className="mt-4 p-3 bg-light rounded">
                <p className="mb-2">
                  <strong>Monthly Contribution:</strong> {formatNumber(monthlyContribution, t('currency'))}
                </p>
                <p className="mb-2">
                  <strong>Annual Contribution:</strong> {formatNumber(annualContribution, t('currency'))}
                </p>
                <p className="mb-2">
                  <strong>Time Horizon:</strong> {yearsToRetirement} years
                </p>
                <p className="mb-0">
                  <strong>Est. Interest Rate:</strong> {interestRate}% per year
                </p>
              </div>

              <div className="mt-4 p-3 bg-success bg-opacity-10 rounded border border-success">
                <p className="mb-0">
                  <strong className="text-success" style={{ fontSize: '1.2rem' }}>
                    Total Savings at Retirement:
                  </strong>
                </p>
                <p className="text-success" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
                  {formatNumber(totalSavings, t('currency'))}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={7}>
          <Card className="shadow-sm">
            <Card.Body>
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={400}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h5>How This Calculation Works</h5>
              <p>
                This savings calculator estimates your total retirement savings based on regular monthly contributions
                with compound interest. The calculation assumes:
              </p>
              <ul>
                <li>Fixed monthly contributions (based on your savings rate)</li>
                <li>Consistent annual interest/returns on your savings</li>
                <li>Regular compounding of returns</li>
              </ul>
              <p className="mb-0">
                <small className="text-muted">
                  Note: This is an estimation. Actual returns may vary based on market conditions and investment choices.
                  Consult a financial advisor for personalized advice.
                </small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Savings;

