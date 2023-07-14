import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-dashboard',
  templateUrl: './inspection-dashboard.page.html',
  styleUrls: ['./inspection-dashboard.page.scss'],
})
export class InspectionDashboardPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigate(index:number){
    switch(index){
      case 0 : 
      this.router.navigate([''])
      break;
      case 1: 
      this.router.navigate(['/general-info']);
      break;
      case 2:       
      this.router.navigate(['/table']);
      // alert('Coming soon')
      break;
      default:
        alert(`Page not found ${index}`);
    }
    console.log(`${index}`);
  }
}
