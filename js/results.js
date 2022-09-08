'use strict';

function displayChart() {
  let y = JSON.parse(localStorage.getItem('toStore'));
  let z = JSON.parse(localStorage.getItem('lives'));

  const chartGraphics = {
    type: 'bar',
    data: {
      labels: ['HanGit Results'],
      datasets: [{
        label: 'Answers Correct',
        data: [y],
        backgroundColor: [
          'rgb(121, 245, 170)',
        ],
        borderColor: [
          'rgb(184, 229, 246)'
        ],
        borderWidth: 2
      },
      {
        label: 'Lives Remaining',
        data: [z],
        backgroundColor: [
          'rgb(184, 229, 246)',
        ],
        borderColor: [
          'rgb(213, 238, 248)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 8
        }
      }
    }
  };
  let canvasChart = document.getElementById('resultsChart').getContext('2d');
  const myChart = new Chart(canvasChart, chartGraphics);
}

displayChart();

//Reset called in HTML onClick for Full Reset upon reload of Home Page
function reset() {
  localStorage.clear();
  document.location.reload();
}
