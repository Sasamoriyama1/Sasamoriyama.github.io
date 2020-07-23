// htmlからグラフを表示する要素（Canvas）を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
   type: 'bar',
   data: {
       labels: ['Red', 'Blue', 'Green', 'Yellow', 'hogehoge', 'hogehoge2'],
       datasets: [
           {
               type: 'bar',
               data: [21, 31, 53, 5, 100, 151],
               backgroundColor:[
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
               ]
           }
       ]
   },
   options: {
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]  
        } 
   }
});