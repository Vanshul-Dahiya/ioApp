import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.page.html',
  styleUrls: ['./attachment.page.scss'],
})
export class AttachmentPage implements OnInit {
  constructor(
    private router: Router,

    private storage: Storage
  ) {}
  val1: string = '';
  val2: string = '';
  sharedData: any;
  ngOnInit() {}
  sourceVehicle: string = '';
  destinationVehicle: string = '';

  sourceVehicleSelectedOption: any;
  destinationVehicleSelectedOption: any;

  async fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject('Error reading file.');
      };
      reader.readAsDataURL(file);
    });
  }

  async onFileSelected(index: number, event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Converting file -> ', file);
      const base64String = await this.fileToBase64(file);
      console.log('converted file -> ', base64String);
      await this.storage.set(`file-${index}`, base64String);
      console.log('saved file -> ');
      console.log(index + ' - File:', file);
    } else {
      console.log('No file selected.');
    }
  }
  getSourceVehicleOptionText(optionValue: string): string {
    switch (optionValue) {
      case 'BUS':
        return 'BUS';
      case 'TRAIN':
        return 'TRAIN';
      case 'FLIGHT':
        return 'FLIGHT';
      default:
        return '-';
    }
  }
  async saveData() {
    this.sourceVehicleSelectedOption = this.getSourceVehicleOptionText(
      this.sourceVehicle
    );
    await this.storage.set('sourceVehicle', this.sourceVehicleSelectedOption);
    this.destinationVehicleSelectedOption = this.getSourceVehicleOptionText(
      this.destinationVehicle
    );
    await this.storage.set(
      'destinationVehicle',
      this.destinationVehicleSelectedOption
    );
  }
  navigate() {
    this.router.navigate(['/calculation']);
  }
}
