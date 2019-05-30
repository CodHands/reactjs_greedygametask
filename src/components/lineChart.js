import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = 'Montserrat'
defaults.global.defaultFontColor = '#fff';

export default ({ lineChartData }) => {
    const [chartData, setchartData] = useState({})

    useEffect(() => {
        setchartData({
            labels: lineChartData.map((chart) => chart.timestamp),
            datasets: [
                {
                    label: 'Date',
                    data: lineChartData.map((chart) => chart.timestamp),
                    borderColor: '#f75580',
                    backgroundColor: '#f75580',
                    pointBorderColor: '#5dcdfa'
                },
                {
                    label: 'eCPM',
                    data: lineChartData.map((chart) => (chart.revenue / chart.impressions) * 1000),
                    borderColor: '#f75580',
                    backgroundColor: '#f75580',
                    pointBorderColor: '#b2f1fc'
                }
            ]
        })
    }, [lineChartData])

    const options = {
        legend: {
            display: false,
            position: 'top',
            fontSize: 25
        },
        scales: {
            xAxes: [{ gridLines: { drawOnChartArea: false, lineWidth: 2 } }],
            yAxes: [{ gridLines: { drawOnChartArea: false, lineWidth: 2 } }]
        }
    }

    return (
        <div className="chart">
            <Line
                data={chartData}
                options={options}
            />
        </div>
    )
}
