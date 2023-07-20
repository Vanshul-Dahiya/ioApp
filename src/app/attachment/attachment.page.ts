import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.page.html',
  styleUrls: ['./attachment.page.scss'],
})
export class AttachmentPage implements OnInit {
  constructor(private router: Router) {}
 val1: string="";
 val2: string="";

  ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;
    // this.val1 = data?.['value1'];
    this.val2 = data?.['value2'];
    console.log( this.val2);
  }
  sourceVehicle: string ="";
  destinationVehicle: string ="";

  onFileSelected(index: number, event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(index + ' - File:', file);
    } else {
      console.log('No file selected.');
    }
  }
  navigate() {
    const navigationExtras: NavigationExtras = {
      state: {
        value2: this.val2,
        selectedOption5: this.sourceVehicle,
        selectedOption6: this.destinationVehicle
      },
    };
    this.router.navigate(['/calculation']);
  }
}
