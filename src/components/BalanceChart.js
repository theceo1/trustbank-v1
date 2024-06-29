import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const BalanceChart = ({ transactions }) => {
  const data = {
    labels: transactions.map(transaction => transaction.date),
    datasets: [
      {
        label: 'Balance Over Time',
        data: transactions.map(transaction => transaction.type === 'Deposit' ? transaction.amount : -transaction.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Balance Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default BalanceChart;
