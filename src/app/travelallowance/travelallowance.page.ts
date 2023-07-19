import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travelallowance',
  templateUrl: './travelallowance.page.html',
  styleUrls: ['./travelallowance.page.scss'],
})
export class TravelallowancePage implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  val1: string = '';
  val2: string = '';
  ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;
    this.val1 = data?.['value1'];
    this.val2 = data?.['value2'];
    console.log(this.val1, this.val2);
  }
  onwardDeparture: string | undefined;
  onwardArrival: string | undefined;
  returnArrival: string | undefined;
  returnDeparture: string | undefined;

  selectedOption3: string | undefined;
  selectedOption4: string | undefined;

  onwardFair: string | undefined;
  returnFair: string | undefined;

  navigate() {
    this.router.navigate(['/attachment']);
  }
}
