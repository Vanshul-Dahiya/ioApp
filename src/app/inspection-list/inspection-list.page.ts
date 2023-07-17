import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.page.html',
  styleUrls: ['./inspection-list.page.scss'],
})
export class InspectionListPage implements OnInit {
  constructor(private router: Router, private http: HttpClient,private menuCtrl : MenuController) {}
  gridConfig: any[] = [];
  ngOnInit() {
    this.http.get<any>('../../assets/ClgData.json').subscribe((data) => {
      this.gridConfig = data;
    });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true,'menuId');
  }
  navigate(index: number) {
    switch (index) {
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
