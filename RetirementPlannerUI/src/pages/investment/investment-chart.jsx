import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatNumber } from "../../common/util";
import { useTranslation } from "react-i18next";

const InvestmentChart = ({ investments }) => {
  const { t } = useTranslation();

  // Generate series for each investment showing growth over time
  const generateSeries = () => {
    return investments.map((investment, index) => {
      const years = Array.from({ length: investment.duration }, (_, i) => i + 1);
      const data = years.map(year => {
        return Math.round(investment.initialAmount * Math.pow(1 + investment.interestRate / 100, year));
      });

      return {
        name: investment.name,
        data: data,
        key: investment.id || index // Add key for React rendering
      };
    });
  };

  const settings = {
    series: generateSeries(),
    options: {
      chart: {
        type: 'line',
        height: 350,
        zoom: {
          enabled: true
        },
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: false
          }
        }
      },
      stroke: {
        width: 6,
        curve: 'smooth'
      },
      colors: ['#00e396', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8'],
      xaxis: {
        categories: investments.length > 0
          ? Array.from({ length: investments[0].duration }, (_, i) => `Year ${i + 1}`)
          : [],
        title: {
          text: t("section.investment.chart.year")
        }
      },
      yaxis: {
        title: {
          text: t("section.investment.chart.value")
        },
        labels: {
          formatter: function (value) {
            if (value === undefined || value === null) return '';
            return formatNumber(value, t('currency'));
          }
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.1
      }
    }
  };

  if (investments.length === 0) {
    return (
      <div className="alert alert-info">
        {t("section.investment.noInvestmentsMessage")}
      </div>
    );
  }

  return (
    <div id="investment-chart" style={{ marginBottom: '30px' }}>
      <h4 className="mb-4">{t("section.investment.chart.title")}</h4>
      <ReactApexChart
        options={settings.options}
        series={settings.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default InvestmentChart;

