import { Component } from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: "red",
      borderColor: "green",
      hidden: false,
      data: [
        10, 20, 30, 40, 50, 60, 70
      ],
      fill: false,
    }, {
      label: "My Second dataset",
      fill: false,
      backgroundColor: "blue",
      hidden: false,
      borderColor: "black",
      data: [
        20, 30, 40, 50, 60, 15, 2
      ],
    }]
  };
  data2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: "red",
      borderColor: "green",
      hidden: false,
      data: [
        10, 20, 30, 40, 50, 60, 70
      ],
      fill: false,
    }, {
      label: "My Second dataset",
      fill: false,
      backgroundColor: "blue",
      hidden: false,
      borderDash: [5, 2.5],
      steppedLine: true,
      borderColor: "black",
      data: [
        20, 30, 40, 50, 60, 15, 2
      ],
    }]
  };
  options1: ChartOptions = {
    scales: {
      yAxes: [
        {
          gridLines: {
            drawTicks: false
          },
          ticks: {
            padding: 10
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawTicks: false
          },
          ticks: {
            padding: 10
          }
        }
      ]
    }
  };
  options2: ChartOptions = {
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          display: false,
          gridLines: {
            display: false
          }
        }
      ]
    }
  };

  onClick(event) {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: "red",
        borderColor: "green",
        hidden: false,
        data: [
          1,2,3,4,5,6,7
        ],
        fill: false,
      }, {
        label: "My Second dataset",
        fill: false,
        hidden: true,
        backgroundColor: "blue",
        borderColor: "black",
        data: [
          20, 30, 40, 50, 60, 15, 2
        ],
      }]
    };
  }

}
