import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "./humidity_styles.css"; // You can create this CSS file for styling

const HumidityChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Similar gradient setup for humidity chart
    var gradient = context.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, '#00C9FF');
    gradient.addColorStop(1, '#92FE9D');

    var config = {
      type: 'line',
      data: {
        labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"],
        datasets: [
          {
            label: 'Humidity',
            data: [60, 55, 70, 62, 75, 68, 70, 65, 72],
            fill: true,
            backgroundColor: gradient,
            borderColor: 'transparent',
            borderWidth: 0,
            pointBackgroundColor: 'transparent',
            pointBorderColor: '#00C9FF',
            pointBorderWidth: 3,
            pointHoverBorderColor: '#92FE9D',
            pointHoverBorderWidth: 10,
            lineTension: 0.4,
          }
        ]
      },
      options: {
        responsive: false,
        elements: {
          point: {
            radius: 6,
            hitRadius: 6,
            hoverRadius: 6
          }
        },
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: 'transparent',
          displayColors: false,
          bodyFontSize: 14,
          callbacks: {
            label: function (tooltipItems, data) {
              return tooltipItems.yLabel + '%';
            }
          }
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            },
          }]
        }
      },
    };

    window.humidityChart = new Chart(context, config);

    // Clean up the chart when component unmounts
    return () => {
      if (window.humidityChart) {
        window.humidityChart.destroy();
      }
    };
  }, []);

  return (
    <div className="card">
      <div className="about">
        <h3>Humidity Chart</h3>
        <p className="lead">Relative Humidity (%)</p>
      </div>
      <canvas ref={canvasRef} id="canvas"></canvas>
      <div className="axis">
        <div className="tick">
          <span className="day-number">10</span>
          <span className="day-name">MON</span>
          <span className="value value--this">55%</span>
        </div>
        {/* Other tick elements */}
        {/* ... */}
      </div>
    </div>
  );
};

export default HumidityChart;
