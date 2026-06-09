import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { formatNumber } from '../../common/util';
import './invest.css';

const Invest = () => {
  const { t } = useTranslation();
  const [initialAmount, setInitialAmount] = useState(50000);
  const [yearsToLookInto, setYearsToLookInto] = useState(10);
  const [optimisticRate, setOptimisticRate] = useState('5');
  const [realisticRate, setRealisticRate] = useState('4');
  const [pessimisticRate, setPessimisticRate] = useState('3');

  const calculateData = () => {
    const currentYear = new Date().getFullYear();
    const data = {
      optimistic: [],
      realistic: [],
      pessimistic: [],
      years: Array.from({ length: yearsToLookInto }, (_, i) => (currentYear + i).toString())
    };

    data.years.forEach((year, index) => {
      data.optimistic.push(Math.round(initialAmount * Math.pow(1 + parseFloat(optimisticRate) / 100, index)));
      data.realistic.push(Math.round(initialAmount * Math.pow(1 + parseFloat(realisticRate) / 100, index)));
      data.pessimistic.push(Math.round(initialAmount * Math.pow(1 + parseFloat(pessimisticRate) / 100, index)));
    });

    return data;
  };

  const chartData = calculateData();

  // Calculate final values for each scenario
  const finalOptimistic = chartData.optimistic[chartData.optimistic.length - 1];
  const finalRealistic = chartData.realistic[chartData.realistic.length - 1];
  const finalPessimistic = chartData.pessimistic[chartData.pessimistic.length - 1];

  const options = {
    chart: {
      height: '100%',
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: chartData.years,
      title: {
        text: 'Year'
      }
    },
    yaxis: {
      title: {
        text: t("calculator.invest.chart.value")
      },
      labels: {
        formatter: function (value) {
          return formatNumber(Math.round(value), t('currency'));
        }
      }
    },
    title: {
      text: t("calculator.invest.title"),
      align: 'center'
    },
    colors: ['#51CF66', '#0077B6', '#FF6B6B'],
    legend: {
      position: 'bottom'
    }
  };

  const series = [
    {
      name: t("calculator.invest.chart.optimisticSeries"),
      data: chartData.optimistic
    },
    {
      name: t("calculator.invest.chart.realisticSeries"),
      data: chartData.realistic
    },
    {
      name: t("calculator.invest.chart.pessimisticSeries"),
      data: chartData.pessimistic
    }
  ];

  return (
    <Container className="invest-container py-5">
      <div className="mb-4">
        <Link to="/home" className="btn btn-secondary btn-sm">
          ← Back to Home
        </Link>
      </div>

      <h1 className="mb-4">{t("calculator.invest.title")}</h1>

      <Row>
        <Col lg={5} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Investment Parameters</Card.Title>
              <Card.Text className="text-muted">
                Analyze investment growth across three scenarios: optimistic, realistic, and pessimistic market conditions.
              </Card.Text>

              <InputGroup className="mb-3">
                <InputGroup.Text>{t("calculator.invest.initialAmount")}</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={initialAmount}
                  onChange={(e) => setInitialAmount(parseInt(e.target.value) || 0)}
                  min="0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>{t("calculator.invest.years")}</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={yearsToLookInto}
                  onChange={(e) => setYearsToLookInto(parseInt(e.target.value) || 1)}
                  min="1"
                  max="50"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>{t("calculator.invest.optimisticRate")} (%):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={optimisticRate}
                  onChange={(e) => setOptimisticRate(e.target.value || '0')}
                  step="0.1"
                  min="0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>{t("calculator.invest.realisticRate")} (%):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={realisticRate}
                  onChange={(e) => setRealisticRate(e.target.value || '0')}
                  step="0.1"
                  min="0"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>{t("calculator.invest.pessimisticRate")} (%):</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={pessimisticRate}
                  onChange={(e) => setPessimisticRate(e.target.value || '0')}
                  step="0.1"
                  min="0"
                />
              </InputGroup>

              <div className="mt-4 p-3 bg-light rounded">
                <p className="mb-2">
                  <strong>Initial Investment:</strong> {formatNumber(initialAmount, t('currency'))}
                </p>
                <p className="mb-2">
                  <strong>Time Horizon:</strong> {yearsToLookInto} years
                </p>
                <p className="mb-0">
                  <strong>Growth Rates:</strong> {optimisticRate}% / {realisticRate}% / {pessimisticRate}%
                </p>
              </div>

              <div className="mt-4 projection-values">
                <div className="mt-3 p-3 bg-success bg-opacity-10 rounded border border-success">
                  <p className="mb-1">
                    <strong className="text-success">Optimistic Scenario</strong>
                  </p>
                  <p className="text-success" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                    {formatNumber(finalOptimistic, t('currency'))}
                  </p>
                </div>

                <div className="mt-3 p-3 bg-primary bg-opacity-10 rounded border border-primary">
                  <p className="mb-1">
                    <strong className="text-primary">Realistic Scenario</strong>
                  </p>
                  <p className="text-primary" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                    {formatNumber(finalRealistic, t('currency'))}
                  </p>
                </div>

                <div className="mt-3 p-3 bg-danger bg-opacity-10 rounded border border-danger">
                  <p className="mb-1">
                    <strong className="text-danger">Pessimistic Scenario</strong>
                  </p>
                  <p className="text-danger" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                    {formatNumber(finalPessimistic, t('currency'))}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={7}>
          <Card className="shadow-sm">
            <Card.Body>
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={450}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h5>Understanding Investment Scenarios</h5>
              <p>
                This investment calculator projects your investment returns under three different market conditions:
              </p>
              <ul>
                <li><strong>Optimistic Scenario:</strong> Assumes favorable market conditions with higher annual returns (typically 5-7%)</li>
                <li><strong>Realistic Scenario:</strong> Assumes average market performance with moderate returns (typically 3-5%)</li>
                <li><strong>Pessimistic Scenario:</strong> Assumes challenging market conditions with lower returns (typically 1-3%)</li>
              </ul>
              <p className="mb-0">
                <small className="text-muted">
                  Note: These projections are estimates based on historical averages. Actual investment returns depend on market conditions,
                  asset allocation, and individual financial circumstances. Consult with a financial advisor for personalized investment guidance.
                </small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Invest;
