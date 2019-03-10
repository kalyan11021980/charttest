import { Component, OnInit, ViewChild } from '@angular/core';
declare var OrgChart:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chartApp';
  public chart: any;
  @ViewChild('orgchart') chartdiv; any;
  constructor() {

  }

  ngOnInit(){
    this.renderChart();
  }

  renderChart() {
    const chartPlaceHolder = this.chartdiv.nativeElement;
    this.chart = new OrgChart(chartPlaceHolder, {
      nodeBinding: {
          field_0: "name"
      },
      nodes: [
          { id: 1, name: "Amber McKenzie" },
          { id: 2, pid: 1, name: "Ava Field" },
          { id: 3, pid: 1, name: "Peter Stevens" }
      ]
  });
  }
}
