'use strict';

// let playerName = prompt('You have completed HanGit! Please enter your name to see your results.');
// let displayName = document.getElementById('resultsInfo');
// displayName.innerText = `Thank you ${playerName} for playing HanGit! Please see your results below.`;

function displayChart() {
  // let labels = ['Answers Correct', 'Lives Remaining'];
  let y = JSON.parse(localStorage.getItem('toStore'));
  let z = JSON.parse(localStorage.getItem('lives'));
  // console.log(y, 'string');

  const chartGraphics = {
    type: 'bar',
    data: {
      labels: ['Git Results'],
      datasets: [{
        label: 'Answers Correct',
        data: [y],
        backgroundColor: [
          'rgb(184, 229, 246)',
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
          'rgb(40, 117, 157)',
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

function reset() {
  localStorage.clear();
  document.location.reload();
}
