"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Skills = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Node.js', 'Express.js', 'MySQL', 'React'],
        datasets: [{
          label: 'Skills',
          data: [80, 80, 80, 60],
          backgroundColor: 'rgba(57, 255, 20, 0.6)',
          borderColor: 'rgba(92, 184, 92, 1)',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              color: '#fff', 
              font: {
                weight: 'bold' 
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#fff', 
              font: {
                weight: 'bold' 
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 16
              }
            }
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className=" py-6">
      <div className="container mx-auto px-4">
        <div className="p-6 rounded-lg shadow-md">
          <canvas ref={chartRef} className="mx-auto" style={{ maxWidth: '450px', width: '100%', height: '350px' }} />
        </div>
      </div>
    </div>
  );
};

export default Skills;