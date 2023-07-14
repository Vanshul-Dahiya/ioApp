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
  abc:string | undefined;
  xyz:string | undefined;
  selectedOption: string | undefined;
  lxa:string | undefined;

  navigate(){
    this.router.navigate(['/attachment'])
  }
}
