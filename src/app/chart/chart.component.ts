import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {GetDataService} from '../services/get-data.service';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public weekData;
  public chart = [];
  public eurLine = [];
  public ilsLine = [];
  public brlLine = [];
  public week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  public eurColor = "rgb(228,54,103)";
  public ilsColor = "rgb(58,142,226)";
  public brlColor = "rgb(254,218,84)";


  constructor(private _getData: GetDataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._getData.getDataForChart().subscribe(
      data => { 
        this.weekData = data;
        this.weekData.forEach(element => {
          this.eurLine.push(element.rates.MYR);
          this.ilsLine.push(element.rates.ILS);
          this.brlLine.push(element.rates.BRL);
        });
        this.creatChart();
      },
      err => console.error(err)
    );
  }

  creatChart(){
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.week,
        datasets: [{ 
            data: this.brlLine,
            label: "BRL",
            borderWidth: 4,
            borderColor: this.eurColor,
            backgroundColor: this.eurColor,
            fill: false
          }, { 
            data: this.ilsLine,
            label: "ILS",
            borderWidth: 4,
            borderColor: this.ilsColor,
            backgroundColor: this.ilsColor,
            fill: false
          }, { 
            data: this.eurLine,
            label: "MYR",
            borderWidth: 4,
            borderColor: this.brlColor,
            backgroundColor: this.brlColor,
            fill: false
          }
        ]
      },
      options: {
          scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  fontColor: "#000",
                  fontSize: "16",
                  labelString: 'Value'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  fontColor: "#000",
                  fontSize: "16",
                  display: true,
                  labelString: 'Days'
                }
              }]
          }
      }
    });
  }

}
