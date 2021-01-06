import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-c3-line-chart',
  templateUrl: './c3-line-chart.component.html',
  styleUrls: ['./c3-line-chart.component.scss']
})
export class C3LineChartComponent {

  constructor() { }


  lineChartData: ChartDataSets[] = [
    { data: [2000, 3000, 2300, 4000, 3300, 6000, 5300, 4000, 5800, 6800, 7000, 6200] },
  ];

  lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true,
        afterTickToLabelConversion: function (scaleInstance) {
          // scaleInstance.ticks[0] = null;
          scaleInstance.ticks[1] = null;
          scaleInstance.ticks[2] = null;
          scaleInstance.ticks[3] = null;
          scaleInstance.ticks[4] = null;
          scaleInstance.ticks[5] = null;
          scaleInstance.ticks[6] = null;
          scaleInstance.ticks[7] = null;
          scaleInstance.ticks[8] = null;
          scaleInstance.ticks[9] = null;
          scaleInstance.ticks[10] = null;
        }

      }],
      yAxes: [{
        display: false
      }]
    }

  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'transparent',
      borderColor: '#E91E63',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',

    }
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

}

