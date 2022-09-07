'use strict';

function displayChart() {
  let labels = ['Answers Correct', 'Lives Remaining'];
  let y = JSON.parse(localStorage.getItem('toStore'));
  console.log(y, 'string');

  const chartGraphics = {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: labels,
        data: [y],
        backgroundColor: [
          'rgb(255, 253, 185)',
        ],
        borderColor: [
          'rgb(236, 177, 156)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  let canvasChart = document.getElementById('resultsChart').getContext('2d');
  const myChart = new Chart(canvasChart, chartGraphics);
}

displayChart();
