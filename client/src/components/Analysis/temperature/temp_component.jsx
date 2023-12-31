import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
// import 'chartjs-adapter-date-fns';
import "./temp_styles.css";

const WeatherChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Apply multiply blend when drawing datasets
    var multiply = {
      beforeDatasetsDraw: function(chart, options, el) {
        chart.ctx.globalCompositeOperation = 'multiply';
      },
      afterDatasetsDraw: function(chart, options) {
        chart.ctx.globalCompositeOperation = 'source-over';
      },
    };

    // Gradient color - this week
    var gradientThisWeek = context.createLinearGradient(0, 0, 0, 150);
    gradientThisWeek.addColorStop(0, '#5555FF');
    gradientThisWeek.addColorStop(1, '#9787FF');

    // Gradient color - previous week
    var gradientPrevWeek = context.createLinearGradient(0, 0, 0, 150);
    gradientPrevWeek.addColorStop(0, '#FF55B8');
    gradientPrevWeek.addColorStop(1, '#FF8787');

    var config = {
      type: 'line',
      data: {
        labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"],
        datasets: [
          {
            label: 'Temperature',
            data: [18, 26, 14, 22, 12, 20, 12, 18, 10],
            fill: false,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'transparent',
            pointBorderColor: '#FFFFFF',
            pointBorderWidth: 3,
            pointHoverBorderColor: 'rgba(255, 255, 255, 0.2)',
            pointHoverBorderWidth: 10,
            lineTension: 0,
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
            label: function(tooltipItems, data) { 
              return tooltipItems.yLabel + '°C';
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
      plugins: [multiply],
    };

    window.chart = new Chart(context, config);

    // Clean up the chart when component unmounts
    return () => {
      if (window.chart) {
        window.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="card">
      <div className="about">
        <h3>Chart.js</h3>
        <p className="lead">Temperature in °C</p>
      </div>
      <canvas ref={canvasRef} id="canvas"></canvas>
      <div className="axis">
        <div className="tick">
          <span className="day-number">10</span>
          <span className="day-name">MON</span>
          <span className="value value--this">26°C</span>
        </div>
        {/* Other tick elements */}
        {/* ... */}
      </div>
    </div>
  );
};

export default WeatherChart;
