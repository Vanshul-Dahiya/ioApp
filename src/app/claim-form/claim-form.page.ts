import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.page.html',
  styleUrls: ['./claim-form.page.scss'],
})
export class ClaimFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedOption: string | undefined;
  xyz:string | undefined;
  abc:string | undefined;
 
}
