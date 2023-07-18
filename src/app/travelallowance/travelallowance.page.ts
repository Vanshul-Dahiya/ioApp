import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelallowance',
  templateUrl: './travelallowance.page.html',
  styleUrls: ['./travelallowance.page.scss'],
})
export class TravelallowancePage implements OnInit {
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onwardDeparture:string | undefined;
  onwardArrival:string | undefined;
  returnArrival:string | undefined;
  returnDeparture:string | undefined;

  selectedOption3: string | undefined;
  selectedOption4: string | undefined;

  onwardFair : string |undefined;
  returnFair : string |undefined;

  navigate(){
    this.router.navigate(['/attachment'])
  }
}
