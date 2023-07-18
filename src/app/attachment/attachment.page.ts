import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.page.html',
  styleUrls: ['./attachment.page.scss'],
})
export class AttachmentPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  selectedOption5: string | undefined;
  selectedOption6: string | undefined;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    // Perform further actions with the selected file
  }
  navigate(){
    this.router.navigate(['/calculation']);
  }
}
