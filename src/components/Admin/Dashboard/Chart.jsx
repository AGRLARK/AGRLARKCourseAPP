import React from 'react'
import { Chart as ChartJS, CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, ArcElement, Legend } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend);

export const LineChart = () => {
    const labels = getLastYearMonths();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Yearly Views"
            }
        }
    }
    const data = {
        labels,
        datasets: [
            {
                label: "Views",
                data: [1, 2, 3, 4, 5, 6],
                borderColor: 'rgba(107,70,193,0.5)',
                backgroundColor: '#f3f0e8'

            }
        ]
    };

    return <Line options={options} data={data} />

}

export const DoughnutChart = () => {
    const datas = {
        labels: ['Subscribed', "Not Subscribe"],
        datasets: [
            {
                label: "Views",
                data: [10, 45],
                borderColor: ['rgb(62,12,171)', "rgb(214,43,129)"],
                backgroundColor: ['rgba(62,12,171,0.3)', "rgba(214,43,129,0.3)"]

            }
        ]
    }
    return <Doughnut data={datas} />
}

function getLastYearMonths() {
    const label = [];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const currentMonth = new Date().getMonth();
    const remain = 11 - currentMonth;

    for (let i = currentMonth; i <= months.length; i--) {
        const element = months[i];
        label.unshift(element);
        if (i === 0) break;
    }

    for (let i = 11; i > remain; i--) {
        if (i === currentMonth) break;
        const element = months[i];
        label.unshift(element);
    }
    return label;
}
getLastYearMonths();