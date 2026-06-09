import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { formatNumber } from '../../common/util';
import './home.css';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [totalIncome, setTotalIncome] = useState(50000);
  const [firstPillarPercentage, setFirstPillarPercentage] = useState(40);
  const [secondPillarPercentage, setSecondPillarPercentage] = useState(40);
  const [thirdPillarPercentage, setThirdPillarPercentage] = useState(20);

  // Calculate amounts for each pillar
  const firstPillarAmount = Math.round(totalIncome * (firstPillarPercentage / 100));
  const secondPillarAmount = Math.round(totalIncome * (secondPillarPercentage / 100));
  const thirdPillarAmount = Math.round(totalIncome * (thirdPillarPercentage / 100));

  const totalPercentage = firstPillarPercentage + secondPillarPercentage + thirdPillarPercentage;

  // Chart configuration for pie chart
  const chartOptions = {
    chart: {
      type: 'pie',
      height: '100%'
    },
    labels: [
      t('home.leftSection.chart.firstPillar'),
      t('home.leftSection.chart.secondPillar'),
      t('home.leftSection.chart.thirdPillar')
    ],
    colors: ['#0077B6', '#00B4D8', '#90E0EF'],
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return Math.round(val) + '%';
          }
        }
      }
    },
    title: {
      text: t('home.leftSection.chart.title'),
      align: 'center'
    }
  };

  const chartSeries = [firstPillarAmount, secondPillarAmount, thirdPillarAmount];

  return (
    <Container fluid className="home-container py-5">

      <Row className="h-100">
        {/* Left Section - Pie Chart and Inputs */}
        <Col lg={6} className="left-section pb-5">
          <div className="chart-container mb-4">
            <h3 className="text-center mb-4">{t('home.leftSection.title')}</h3>
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="pie"
              height={350}
            />
          </div>

          <div className="inputs-container">
            <InputGroup className="mb-3">
              <InputGroup.Text>{t('home.leftSection.totalIncome')}</InputGroup.Text>
              <Form.Control
                type="number"
                value={totalIncome}
                onChange={(e) => setTotalIncome(parseInt(e.target.value) || 0)}
                min="0"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>{t('home.leftSection.firstPillar')}</InputGroup.Text>
              <Form.Control
                type="number"
                value={firstPillarPercentage}
                onChange={(e) => setFirstPillarPercentage(parseInt(e.target.value) || 0)}
                min="0"
                max="100"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>{t('home.leftSection.secondPillar')}</InputGroup.Text>
              <Form.Control
                type="number"
                value={secondPillarPercentage}
                onChange={(e) => setSecondPillarPercentage(parseInt(e.target.value) || 0)}
                min="0"
                max="100"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>{t('home.leftSection.thirdPillar')}</InputGroup.Text>
              <Form.Control
                type="number"
                value={thirdPillarPercentage}
                onChange={(e) => setThirdPillarPercentage(parseInt(e.target.value) || 0)}
                min="0"
                max="100"
              />
            </InputGroup>

            {totalPercentage !== 100 && (
              <div className="alert alert-warning mb-3">
                Total percentage: {totalPercentage}% (should be 100%)
              </div>
            )}

            <div className="amounts-display">
              <InputGroup className="mb-2">
                <InputGroup.Text>{t('home.leftSection.firstPillarAmount')}</InputGroup.Text>
                <Form.Control
                  type="text"
                  value={formatNumber(firstPillarAmount, t('currency'))}
                  disabled
                />
              </InputGroup>

              <InputGroup className="mb-2">
                <InputGroup.Text>{t('home.leftSection.secondPillarAmount')}</InputGroup.Text>
                <Form.Control
                  type="text"
                  value={formatNumber(secondPillarAmount, t('currency'))}
                  disabled
                />
              </InputGroup>

              <InputGroup className="mb-2">
                <InputGroup.Text>{t('home.leftSection.thirdPillarAmount')}</InputGroup.Text>
                <Form.Control
                  type="text"
                  value={formatNumber(thirdPillarAmount, t('currency'))}
                  disabled
                />
              </InputGroup>
            </div>
          </div>
        </Col>

        {/* Right Section - Action Buttons */}
        <Col lg={6} className="right-section">
          <div className="buttons-container">
            <h3 className="mb-4">{t('home.rightSection.title')}</h3>

            <Button
              className="action-button mb-4"
              onClick={() => navigate('/tax-savings')}
              size="lg"
            >
              <div className="button-title">{t('home.rightSection.taxSavings')}</div>
              <div className="button-description">{t('home.rightSection.taxSavingsDesc')}</div>
            </Button>

            <Button
              className="action-button mb-4"
              onClick={() => navigate('/savings')}
              size="lg"
            >
              <div className="button-title">{t('home.rightSection.savings')}</div>
              <div className="button-description">{t('home.rightSection.savingsDesc')}</div>
            </Button>

            <Button
              className="action-button"
              onClick={() => navigate('/invest')}
              size="lg"
            >
              <div className="button-title">{t('home.rightSection.investCalculator')}</div>
              <div className="button-description">{t('home.rightSection.investCalculatorDesc')}</div>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
