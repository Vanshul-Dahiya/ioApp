import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.page.html',
  styleUrls: ['./claim-form.page.scss'],
})
export class ClaimFormPage implements OnInit {
  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    private storage: Storage
  ) {}

  ngOnInit() {}
  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedDateTime: string = '';
  xyz: string | undefined;
  abc: string | undefined;
  textInput: string = '';
  formattedText: string = '';
  getOptionText(optionValue: string): string {
    switch (optionValue) {
      case 'Option 1':
        return 'Service';
      case 'Option 2':
        return 'Retired';
      default:
        return '';
    }
  }
  sendDataToService() {
    const dataToSend = {
      name: 'J',
      age: 3,
    };
    this.dataSharingService.setData(dataToSend);
    console.log(' data to send ->   ', dataToSend);
  }
  async saveData() {
    const data = 'data imp1';
    await this.storage.set('value2', data);
    console.log('Saving data ... ');
  }
  async retrieveData() {
    console.log(this.storage.get('value2'));
  }
  onDateTimeChange(event: any) {
    this.selectedDateTime = event.detail.value;
    this.selectedDateTime = new Date(this.selectedDateTime).toLocaleString(
      'en-US',
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }
    );
    console.log(this.selectedDateTime);
  }
  onInputChange(value: string) {
    if (value) {
      this.textInput = value;
      this.formattedText = this.textInput.toString();
      console.log(this.textInput + '  < - >  ' + this.formattedText);
    }
  }
  navigate() {
    // console.log( 'option 1 ->  ' + this.selectedOption1 + '  option 2 -> '  + this.selectedOption2 ) ;
    const selectOption1 = this.getOptionText(this.selectedOption1);
    console.log(
      'selectedOption1 -> ' +
        selectOption1 +
        ' selectedDateTime -> ' +
        this.selectedDateTime +
        ' formattedText -> ' +
        this.formattedText
    );

    this.selectedOption1 = '';
    this.selectedOption2 = '';

    const dataToPass = {
      value1: this.selectedDateTime,
      value2: selectOption1,
      // Add more values as needed
    };
    this.sendDataToService();
    this.router.navigate(['/travelallowance'], { state: dataToPass });
  }
}
