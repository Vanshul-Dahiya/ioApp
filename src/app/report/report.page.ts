import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedOption: string | undefined;
  xyz:string | undefined;
  abc:string | undefined;
}
