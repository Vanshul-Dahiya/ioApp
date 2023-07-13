import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    // alert('page')
    console.log('Dashboard page')
  }
  onSubmit(){
    this.router.navigate(['/home' ])
  }
  navigate(index : number){
    alert(`You clicked on ${index}`);
    console.log('working!')
    switch (index) {
      case 1:
        console.log('working?')
        this.router.navigate(['/inspection-list']);
        break;
      case 2:
        this.router.navigate(['/report']);
        break;
      case 3:
        this.router.navigate(['/pending-list']);
        break;
      case 4:
        this.router.navigate(['/claim-form']);
        break;
      default:
        break;
    }
  }
}