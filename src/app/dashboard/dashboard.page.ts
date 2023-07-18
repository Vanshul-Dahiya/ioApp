import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router : Router,private menuCtrl : MenuController) { }

  ngOnInit() {
    // alert('page')
    console.log('Dashboard page')
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true,'main-menu');
  }
  
  onSubmit(){
    this.router.navigate(['/home' ])
  }
  navigate(index : number){
    switch (index) {
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['/pending-list']);
        break;
      case 2:
        this.router.navigate(['/report']);
        break;
      case 3:
        this.router.navigate(['/inspection-list']);
        break;
      case 4:
        this.router.navigate(['/claim-form']);
        break;
      default:
        break;
    }
  }
}