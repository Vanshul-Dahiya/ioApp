import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.page.html',
  styleUrls: ['./calculation.page.scss'],
})
export class CalculationPage implements OnInit {
  val2: string = "";
  selectedOption5: string="";
  selectedOption6: string="";


  constructor(private router : Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
  }

  btnClick(){
   
  }
  
}