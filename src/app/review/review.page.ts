import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
  ) {}

  ngOnInit() {
  
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duration in milliseconds
      position: 'bottom', // Position of the toast message
    });

    await toast.present();
  }
  async retrieveData() {
    const label1 = document.getElementById('serviceOptionFetch');
    const val1 = await this.storage.get('serviceOption');
    if (label1) {
      label1.innerHTML = val1;
    }
    const label2 = document.getElementById('purposeOptionFetch');
    const val2 = await this.storage.get('purposeOption');
    if (label2) {
      label2.innerHTML = val2;
    }
    const label3 = document.getElementById('basicPayInputFetch');
    const val3 = await this.storage.get('basicPayInput');
    if (label3) {
      label3.innerHTML = val3;
    }
    const label4 = document.getElementById('declaredIncomeInputFetch');
    const val4 = await this.storage.get('declaredIncomeInput');
    if (label4) {
      label4.innerHTML = val4;
    }
    const label5 = document.getElementById('infoDateTimeFetch');
    const val5 = await this.storage.get('infoDateTime');
    if (label5) {
      label5.innerHTML = val5;
    }
    const label6 = document.getElementById('sourceDepartureDatefetch');
    const val6 = await this.storage.get('sourceDeparturedate');
    if (label6) {
      label6.innerHTML = val6;
    }
    const label7 = document.getElementById('sourceArrivalDatefetch');
    const val7 = await this.storage.get('sourceArrivaldate');
    if (label7) {
      label7.innerHTML = val7;
    }
    const label8 = document.getElementById('destinationdepartureDatefetch');
    const val8 = await this.storage.get('destinationDeparturedate');
    if (label8) {
      label8.innerHTML = val8;
    }
    const label9 = document.getElementById('destinationarrivalDatefetch');
    const val9 = await this.storage.get('destinationArrivaldate');
    if (label9) {
      label9.innerHTML = val9;
    }
    const label10 = document.getElementById('sourceModeOfJourneyfetch');
    const val10 = await this.storage.get('getModeOfJourney');
    if (label10) {
      label10.innerHTML = val10;
    }
    const label11 = document.getElementById('arrivalModeOfJourneyfetch');
    const val11 = await this.storage.get('getarrivalModeOfJourney');
    if (label11) {
      label11.innerHTML = val11;
    }
    const label12 = document.getElementById('sourceDepartureStationfetch');
    const val12 = await this.storage.get('sourceDepartureStation');
    if (label12) {
      label12.innerHTML = val12;
    }
    const label13 = document.getElementById('sourceArrivalStationfetch');
    const val13 = await this.storage.get('sourceArrivalStation');
    if (label13) {
      label13.innerHTML = val13;
    }
    const label14 = document.getElementById('sourceFairfetch');
    const val14 = await this.storage.get('sourceFair');
    if (label14) {
      label14.innerHTML = val14;
    }
    const label15 = document.getElementById('returnDepartureStationfetch');
    const val15 = await this.storage.get('returnDepartureStation');
    if (label15) {
      label15.innerHTML = val15;
    }
    const label16 = document.getElementById('returnArrivalStationfetch');
    const val16 = await this.storage.get('returnArrivalStation');
    if (label16) {
      label16.innerHTML = val16;
    }
    const label17 = document.getElementById('destinationFairfetch');
    const val17= await this.storage.get('destinationFair');
    if (label17) {
      label17.innerHTML = val17;
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to submit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.presentToast('Submission canceled');
          },
        },
        {
          text: 'Submit',
          handler: () => {
            this.presentToast('Submitting...');
            this.router.navigate(['/report']);
          },
        },
      ],
    });

    await alert.present();
  }

  submitBtn() {
    this.presentAlert();
  }
}
