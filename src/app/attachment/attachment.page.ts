import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.page.html',
  styleUrls: ['./attachment.page.scss'],
})
export class AttachmentPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
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
    this.router.navigate(['/calculation']);
  }
}
