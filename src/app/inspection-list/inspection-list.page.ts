import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.page.html',
  styleUrls: ['./inspection-list.page.scss'],
})
export class InspectionListPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigate(index : number){
    switch(index){
      case 0: 
      this.router.navigate(['']);
      break;
      case 1: 
      this.router.navigate(['/inspection-dashboard']);
      break;
      default:
        alert(`Page not found ${index}`);
    }
    console.log(`${index}`);
  }
}
