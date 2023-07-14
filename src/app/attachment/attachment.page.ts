import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.page.html',
  styleUrls: ['./attachment.page.scss'],
})
export class AttachmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedOption: string | undefined;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // Perform further actions with the selected file
  }
}
