import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  public lineChartData: ChartDataSets[] = [
    { data: [2000, 3000, 2300, 4000, 3300, 6000, 5300, 4000, 5800, 6800, 7000, 6200]},
  ];

  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value:any  , index, values) {
            if(parseInt(value) >= 1000){
              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return '$' + value;
            }
          }
        }
      }]
    },

  };

  public lineChartColors: Color[] = [
    { 
      backgroundColor: 'transparent',
      borderColor: '#E91E63',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',

    }
  ]

  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.chart.options = {}
  }

}
