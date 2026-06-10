import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { formatNumber } from "../../common/util";
import { useTranslation } from "react-i18next";

const ExpenseChart = ({ expenses }) => {
  const { t } = useTranslation();

  const generateChartData = () => {
    if (expenses.length === 0) {
      return { categories: [], seriesData: [] };
    }

    // Get the earliest start date and latest termination date
    const startDates = expenses.map(e => new Date(e.startDate));
    const endDates = expenses.map(e => new Date(e.terminationDate));

    const minYear = Math.min(...startDates.map(d => d.getFullYear()));
    const maxYear = Math.max(...endDates.map(d => d.getFullYear()));

    // Generate array of years
    const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
    const categories = years.map(year => year.toString());

    // Calculate expenses for each year
    const seriesData = [];

    expenses.forEach(expense => {
      const expenseData = [];
      const startDate = new Date(expense.startDate);
      const endDate = new Date(expense.terminationDate);

      years.forEach(year => {
        const yearStart = new Date(year, 0, 1);
        const yearEnd = new Date(year, 11, 31);

        // Check if expense is active in this year
        if (startDate <= yearEnd && endDate >= yearStart) {
          // Calculate the number of months in this year the expense is active
          const effectiveStart = new Date(Math.max(startDate.getTime(), yearStart.getTime()));
          const effectiveEnd = new Date(Math.min(endDate.getTime(), yearEnd.getTime()));

          const monthsInYear = (effectiveEnd.getFullYear() - effectiveStart.getFullYear()) * 12
            + (effectiveEnd.getMonth() - effectiveStart.getMonth())
            + (effectiveEnd.getDate() >= effectiveStart.getDate() ? 1 : 0);

          const yearlyAmount = Math.round((expense.annualMonthlyValue * monthsInYear) / 12);
          expenseData.push(yearlyAmount);
        } else {
          expenseData.push(0);
        }
      });

      seriesData.push({
        name: expense.name,
        data: expenseData
      });
    });

    return { categories, seriesData };
  };

  const { categories, seriesData } = generateChartData();

  const settings = {
    series: seriesData,
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          endingShape: 'rounded'
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#00e396', '#00ced1', '#ff69b4'],
      xaxis: {
        categories: categories,
        title: {
          text: t("section.expense.chart.year")
        }
      },
      yaxis: {
        title: {
          text: t("section.expense.chart.value")
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
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return formatNumber(value, t('currency'));
          }
        }
      }
    }
  };

  if (expenses.length === 0) {
    return (
      <div className="alert alert-info">
        {t("section.expense.noExpensesMessage")}
      </div>
    );
  }

  return (
    <div id="expense-chart" style={{ marginBottom: '30px' }}>
      <h4 className="mb-4">{t("section.expense.chart.title")}</h4>
      <ReactApexChart
        options={settings.options}
        series={settings.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ExpenseChart;

