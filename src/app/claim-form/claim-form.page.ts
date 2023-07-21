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
  ) { }

  ngOnInit() { }
  serviceOption: string = '';
  purposeOption: string = '';

  eventDateTime: string = '';

  declaredIncome: string | undefined;

  basicPayInput: string = '';
  declaredIncomeInput: string = '';

  formattedText: string = '';

  serviceSelectedOption: any;
  purposeSelectedOption: any;

  getServiceOptionText(optionValue: string): string {
    switch (optionValue) {
      case 'Service':
        return 'Service';
      case 'Retired':
        return 'Retired';
      default:
        return '?';
    }
  }
  getPurposeOptionText(optionValue: string): string {
    switch (optionValue) {
      case 'Meeting':
        return 'Meeting';
      case 'Inspection':
        return 'Inspection';
      default:
        return '-----';
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
  //  5 -> 2 input | 2 select option | 1 dateTime
  async saveData() {
    // * option select
    // this.serviceSelectedOption = this.getServiceOptionText(this.selectedOption1);
    // const data = this.serviceSelectedOption;

    // * dateTime
    // const data = this.eventDateTime;

    // * input Text
    // const data = this.formattedText;

    //  ! Set Options in local storage
    this.serviceSelectedOption = this.getServiceOptionText(this.serviceOption);
    await this.storage.set('serviceOption', this.serviceSelectedOption);

    this.purposeSelectedOption = this.getPurposeOptionText(this.purposeOption);
    await this.storage.set('purposeOption', this.purposeSelectedOption);

    // ! Set Inputs in local storage
    await this.storage.set('basicPayInput', this.basicPayInput);
    await this.storage.set('declaredIncomeInput', this.declaredIncomeInput);

    // ! Set DateTime in local storage
    await this.storage.set('infoDateTime', this.eventDateTime)

    // const data = this.formattedText;
    // await this.storage.set('value2', data);
    console.log('Saving data ... ');
  }
  onDateTimeChange(event: any) {
    this.eventDateTime = event.detail.value;
    this.eventDateTime = new Date(this.eventDateTime).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(this.eventDateTime);
  }
  onInputChange(value: string) {
    if (value) {
      this.formattedText = value.toString();
      console.log(
        this.formattedText,
        ` -basicpay input ${this.basicPayInput} -`,
        '  < - > ',
        ` -declared income input ${this.declaredIncomeInput} -`
      );
    }
  }

  navigate() {
    // console.log( 'option 1 ->  ' + this.selectedOption1 + '  option 2 -> '  + this.selectedOption2 ) ;

    console.log(
      'selectedOption1 -> ' +
      this.serviceSelectedOption +
      ' eventDateTime -> ' +
      this.eventDateTime +
      ' formattedText -> ' +
      this.formattedText
    );

    this.serviceOption = '';
    this.purposeOption = '';

    const dataToPass = {
      value1: this.eventDateTime,
      value2: this.serviceSelectedOption,
      // Add more values as needed
    };
    this.sendDataToService();
    this.router.navigate(['/travelallowance'], { state: dataToPass });
  }
}
