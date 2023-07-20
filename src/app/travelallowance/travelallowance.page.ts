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

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
 async saveData(){
  await this.storage.set('name', 'Mr. Ionitron');
 }
 async getData(){
  const name = await this.storage.get('name');
  console.log(name)
 }
 

  
  private _storage: Storage | null = null;
  constructor(private router: Router, private route: ActivatedRoute,private dataSharingService : DataSharingService,private storage: Storage) {this.init();}

  sharedData : any;
  val1: string = '';
  val2: string = '';
  async ngOnInit() {
    this.sharedData = this.dataSharingService.getData()
    console.log( ' data sharing service ->  ' , this.sharedData)
    // const data = this.router.getCurrentNavigation()?.extras.state;
    // this.val1 = data?.['value1'];
    // this.val2 = data?.['value2'];
    // console.log(this.val1, this.val2);
    await this.storage.create();
  
  }
  getOptionText(optionValue: string): string {
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
  sendDataToService(){
    const dataToSend2 = {
      name : 'L' , age :13
    }
    this.dataSharingService.setData(dataToSend2);
    console.log( ' data to send ->   ' , dataToSend2)
  }
  
 
  sourceDepartureStation: string="";
  sourceArrivalStation: string="";
  returnDepartureStation: string="";
  returnArrivalStation: string="";

  sourceVehicle: string ="";
  destinationVehicle: string ="";
 
  sourceFair: string="";
  destinationFair: string="";

  navigate() {
    const sourceVehicle = this.getOptionText(this.sourceVehicle);
    console.log( 'selectedOption3 -> ' + this.sourceVehicle ) ;
    const destinationVehicle = this.getOptionText(this.sourceVehicle);
    console.log('selectedOption3 -> ' + this.sourceVehicle);

    this.sourceVehicle = '';
    this.destinationVehicle = '';

    const dataToPass = {
      value2: sourceVehicle,
      // Add more values as needed
    };
    this.sendDataToService();
    this.router.navigate(['/attachment'], { state: dataToPass });
  }
}
