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
  getOptionText(optionValue: string): string {
    switch (optionValue) {
      case 'Option 1':
        return 'bus';
      case 'Option 2':
        return 'flight';
        case 'Option 3':
        return 'train';
      default:
        return '';
    }
  }
  onwardDeparture: string | undefined;
  onwardArrival: string | undefined;
  returnArrival: string | undefined;
  returnDeparture: string | undefined;

  selectedOption3: string ="";
  selectedOption4: string ="";

  onwardFair: string | undefined;
  returnFair: string | undefined;

  navigate() {
    const selectOption1 = this.getOptionText(this.selectedOption3);
    console.log( 'selectedOption3 -> ' + this.selectedOption3 ) ;

    this.selectedOption3 = '';
    this.selectedOption4 = '';

    const dataToPass = {
     
      value2: selectOption1,
      // Add more values as needed
    };

  
  
    this.router.navigate(['/attachment'], {state:dataToPass});
 
}
}
