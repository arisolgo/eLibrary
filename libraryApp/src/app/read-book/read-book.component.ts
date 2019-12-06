import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-book',
  template:`
  <pdf-viewer [src]="pdfSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `,
  //templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.scss']
  


})
export class ReadBookComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit() {
  }

}
