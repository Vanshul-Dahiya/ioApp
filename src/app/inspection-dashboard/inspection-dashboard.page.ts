import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-dashboard',
  templateUrl: './inspection-dashboard.page.html',
  styleUrls: ['./inspection-dashboard.page.scss'],
})
export class InspectionDashboardPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  gridConfig: any[] = [];
  data = this.http
    .get<any>('../../assets/dashboard_data.json')
    .subscribe((data) => {
      this.gridConfig = data;
    });

  ngOnInit() {}
  navigate(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(['']);
        break;
      case 1:
        this.router.navigate(['/general-info']);
        console.log(index)
        break;
      case 2:
        this.router.navigate(['/table']);
        console.log(index)
        break;
      case 3:
        this.router.navigate(['/faculty-detail']);
        console.log(index)
        break;
      case 4:
        this.router.navigate(['/infrastructure']);
        console.log(index)
        break;
      case 5:
        this.router.navigate(['/equipment']);
        console.log(index)
        break;
      case 6:
        this.router.navigate(['/table']);
        console.log(index)
        break;
      case 7:
        // this.router.navigate(['/table']);
        alert('Will be added soon!');
        break;
      default:
        alert(`Page not found ${index}`);
    }
    console.log(`${index}`);
  }
}
