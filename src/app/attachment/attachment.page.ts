import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.page.html',
  styleUrls: ['./attachment.page.scss'],
})
export class AttachmentPage implements OnInit {
  constructor(
    private router: Router,
    private dataSharingService: DataSharingService
  ) {}
  val1: string = '';
  val2: string = '';
  sharedData: any;
  ngOnInit() {
    this.sharedData = this.dataSharingService.getData();
    console.log(this.sharedData);

    const data = this.router.getCurrentNavigation()?.extras.state;
    // this.val1 = data?.['value1'];
    this.val2 = data?.['value2'];
    console.log(this.val2);
  }
  selectedOption5: string | undefined;
  selectedOption6: string | undefined;

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
        selectedOption5: this.selectedOption5,
        selectedOption6: this.selectedOption6,
      },
    };
    this.router.navigate(['/calculation']);
  }
}
