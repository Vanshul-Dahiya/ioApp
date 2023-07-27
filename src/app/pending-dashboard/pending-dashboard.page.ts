import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pending-dashboard',
  templateUrl: './pending-dashboard.page.html',
  styleUrls: ['./pending-dashboard.page.scss'],
})
export class PendingDashboardPage implements OnInit {
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
        break;
      case 2:
        this.router.navigate(['/table']);
        break;
      case 3:
        this.router.navigate(['/faculty-detail']);
        break;
      case 4:
        this.router.navigate(['/infrastructure']);
        break;
      case 5:
        this.router.navigate(['/equipment']);
        break;
      case 6:
        this.router.navigate(['/library']);
        break;
        case 7:
        this.router.navigate(['/others']);
        break;
      case 8:
        // this.router.navigate(['/table']);
        alert('Will be added soon!');
        break;
      default:
        alert(`Page not found ${index}`);
    }
    console.log(`${index}`);
  }
  boom(){
    alert('Are aa rha h bhai , sabar kro!')
    this.router.navigate(['/']);
  }
}
