import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

@Component({
  selector: "app-library",
  templateUrl: "library.component.html",
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public canvas : any;
  public ctx:any = {};
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  constructor() {}

  ngOnInit() {
   
  }

}
