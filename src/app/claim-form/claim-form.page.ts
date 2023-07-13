import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.page.html',
  styleUrls: ['./claim-form.page.scss'],
})
export class ClaimFormPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  selectedOption: string | undefined;
  xyz:string | undefined;
  abc:string | undefined;
 navigate(){
  this.router.navigate(['/travelallowance'])
 }
}
