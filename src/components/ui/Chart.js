// src/components/ui/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default Chart;
