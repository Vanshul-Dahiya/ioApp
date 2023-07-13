import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.page.html',
  styleUrls: ['./pending-list.page.scss'],
})
export class PendingListPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
navigate(index:number){
  switch(index){
    case 0 :
      this.router.navigate(['']);
      break;
      case 1  : 
      this.router.navigate(['/pending-dashboard']);
      break;
      default :
      alert(`${index}`)
  }
}
}
