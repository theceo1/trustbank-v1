// src/components/ui/Chart.js

import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = ({ type, data, options }) => {
  switch (type) {
    case 'line':
      return <Line data={data} options={options} />;
    case 'bar':
      return <Bar data={data} options={options} />;
    case 'pie':
      return <Pie data={data} options={options} />;
    case 'doughnut':
      return <Doughnut data={data} options={options} />;
    default:
      return null;
  }
};

export default Chart;
