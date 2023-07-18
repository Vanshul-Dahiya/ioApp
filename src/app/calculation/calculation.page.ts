import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.page.html',
  styleUrls: ['./calculation.page.scss'],
})
export class CalculationPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  btnClick(){
    this.router.navigate(['/review']);
  }
}
