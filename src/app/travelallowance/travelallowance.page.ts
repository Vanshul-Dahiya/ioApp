import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-travelallowance',
  templateUrl: './travelallowance.page.html',
  styleUrls: ['./travelallowance.page.scss'],
})
export class TravelallowancePage implements OnInit {
  sourceDepartureStation: string = "";
  sourceArrivalStation: string = "";
  returnDepartureStation: string = "";
  returnArrivalStation: string = "";
  sourceVehicle: string = "";
  destinationVehicle: string = "";
  eventDateTime: string = '';
  sourceFair: string = "";
  destinationFair: string = "";
  formattedText: any;
  sourceDepartureDate: string = '';
  sourceArrivalDate: string = '';
  destinationDepartureDate: string = '';
  destinationArrivalDate: string = '';

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
  async saveData() {
    // * option select
    // this.serviceSelectedOption = this.getServiceOptionText(this.selectedOption1);
    // const data = this.serviceSelectedOption;

    // * dateTime
    // const datetime = this.eventDateTime;
        // ! Set Inputs in local storage
        await this.storage.set('sourceDepartureStation', this.sourceDepartureStation);
        await this.storage.set('sourceArrivalStation', this.sourceArrivalStation);
        await this.storage.set('sourceFair', this.sourceFair);
        await this.storage.set('returnDepartureStation', this.returnDepartureStation);
        await this.storage.set('returnArrivalStation', this.returnArrivalStation);
        await this.storage.set('destinationFair', this.destinationFair);

    // * input Text
    // const data = this.formattedText;
    //  ! Set Options in local storage

    const sourceModeOfJourney = this.getsourceModeOfJourney(this.sourceVehicle);
    await this.storage.set('getModeOfJourney', sourceModeOfJourney);
    const arrivalModeOfJourney = this.getarrivalModeOfJourney(this.destinationVehicle);
    await this.storage.set('getarrivalModeOfJourney', arrivalModeOfJourney);

    // const data = this.formattedText;
    // ! Set DateTime in local storage
    await this.storage.set('sourceDeparturedate', this.sourceDepartureDate);
    await this.storage.set('sourceArrivaldate', this.sourceArrivalDate);
    await this.storage.set('destinationDeparturedate', this.destinationDepartureDate,);
    await this.storage.set('destinationArrivaldate', this.destinationArrivalDate);

      
    console.log('Saving data ... ');
  }
  async getData() {
    const name = await this.storage.get('name');
    console.log(name)
  }



  private _storage: Storage | null = null;
  constructor(private router: Router, private route: ActivatedRoute, private dataSharingService: DataSharingService, private storage: Storage) { this.init(); }

  sharedData: any;
  val1: string = '';
  val2: string = '';
  async ngOnInit() {
    this.sharedData = this.dataSharingService.getData()
    console.log(' data sharing service ->  ', this.sharedData)
    // const data = this.router.getCurrentNavigation()?.extras.state;
    // this.val1 = data?.['value1'];
    // this.val2 = data?.['value2'];
    // console.log(this.val1, this.val2);
    await this.storage.create();

  }
  getsourceModeOfJourney(optionValue: string): string {
    switch (optionValue) {
      case 'Option 1':
        return 'bus';
      case 'Option 2':
        return 'flight';
      case 'Option 3':
        return 'train';
      default:
        return '';
    }
  }
  getarrivalModeOfJourney(optionValue: string): string {
    switch (optionValue) {
      case 'Option 1':
        return 'bus';
      case 'Option 2':
        return 'flight';
      case 'Option 3':
        return 'train';
      default:
        return '';
    }
  }
  onInputChange(value: string) {
    if (value) {
      this.formattedText = value.toString();
      console.log(
        this.formattedText,
      );
    }
  }
  
  sendDataToService() {
    const dataToSend2 = {
      name: 'L', age: 13
    }
    this.dataSharingService.setData(dataToSend2);
    console.log(' data to send ->   ', dataToSend2)
  }
  onsourceDepartureDateChange(event: any) {
    this.sourceDepartureDate = event.detail.value;
    this.sourceDepartureDate = new Date(this.sourceDepartureDate).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    console.log('Departure Date: ' + this.sourceDepartureDate);
  }
  onDestinationDepartureDateChange(event: any) {
    this.destinationDepartureDate = event.detail.value;
    this.destinationDepartureDate = new Date(this.destinationDepartureDate).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    console.log('Destination Departure Date: ' + this.destinationDepartureDate);
  }

  onsourceArrivalDateChange(event: any) {
    this.sourceArrivalDate = event.detail.value;
    this.sourceArrivalDate = new Date(this.sourceArrivalDate).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    console.log('Arrival Date: ' + this.sourceArrivalDate);
  }
  onDestinationArrivalDateChange(event: any) {
    this.destinationArrivalDate = event.detail.value;
    this.destinationArrivalDate = new Date(this.destinationArrivalDate).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    console.log('Destination Arrival Date: ' + this.destinationArrivalDate);
  }



  navigate() {
    const sourceVehicle = this.getsourceModeOfJourney(this.sourceVehicle);
    console.log('selectedOption3 -> ' + this.sourceVehicle);
    const destinationVehicle = this.getsourceModeOfJourney(this.sourceVehicle);
    console.log('selectedOption3 -> ' + this.sourceVehicle);
    

    this.sourceVehicle = '';
    this.destinationVehicle = '';

    const dataToPass = {

      sourceDepartureStation: this.sourceDepartureStation,
    sourceArrivalStation: this.sourceArrivalStation,
    returnDepartureStation: this.returnDepartureStation,
    returnArrivalStation: this.returnArrivalStation,
    sourceVehicle: sourceVehicle,
    destinationVehicle: destinationVehicle,
    eventDateTime: this.eventDateTime,
    sourceFair: this.sourceFair,
    destinationFair: this.destinationFair,
    sourceDepartureDate: this.sourceDepartureDate,
    sourceArrivalDate: this.sourceArrivalDate,
    destinationDepartureDate: this.destinationDepartureDate,
    destinationArrivalDate: this.destinationArrivalDate,
      // Add more values as needed
    };
    this.sendDataToService();
    this.router.navigate(['/attachment'], { state: dataToPass });
  }
}
