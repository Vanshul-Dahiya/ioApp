import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-travelallowance',
  templateUrl: './travelallowance.page.html',
  styleUrls: ['./travelallowance.page.scss'],
})
export class TravelallowancePage implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute , private storage: Storage) {
    this.init();
  }
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
  val1: string = '';
  val2: string = '';
  async ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;
    this.val1 = data?.['value1'];
    this.val2 = data?.['value2'];
    console.log(this.val1, this.val2);
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
  sourceDepartureStaion: string="";
  sourceArrivalStaion: string="";
  returnDepartureStaion: string="";
  returnArivaStation: string="";

  sourceVehicle: string ="";
  destinationVehicle: string ="";

  sourceFair: string="";
  destinationFair: string="";

  navigate() {
    const selectOption1 = this.getOptionText(this.sourceVehicle);
    console.log( 'selectedOption3 -> ' + this.sourceVehicle ) ;

    this.sourceVehicle = '';
    this.destinationVehicle = '';

    const dataToPass = {
     
      value2: selectOption1,
      // Add more values as needed
    };

  
  
    this.router.navigate(['/attachment'], {state:dataToPass});
 
}
}
