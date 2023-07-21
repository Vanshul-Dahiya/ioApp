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

  imageURL1: string = '';
  imageURL2: string = '';
  imageURL3: string = '';
  imageURL4: string = '';
  imageURL5: string = '';
  ngOnInit() {}
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

    const label18 = document.getElementById('imageFetch1');
    const val18 = await this.storage.get('file-1');
    // Convert the base64 string to a Blob
    const contentType = 'image/png';
    const imageBlob = this.base64ToBlob(val18, contentType);
    console.log(imageBlob);
    const imageUrl1 = URL.createObjectURL(imageBlob);
    console.log('Image URL:', imageUrl1);
    if (label18) {
      this.imageURL1 = imageUrl1;
    }

    const label19 = document.getElementById('imageFetch2');
    const val19 = await this.storage.get('file-2');
    const contentType2 = 'image/png';
    const imageBlob2 = this.base64ToBlob(val19, contentType2);
    console.log(imageBlob2);
    const imageUrl2 = URL.createObjectURL(imageBlob2);
    console.log('Image URL:', imageUrl2);
    if (label19) {
      this.imageURL2 = imageUrl2;
    }
    const label20 = document.getElementById('imageFetch3');
    const val20 = await this.storage.get('file-3');
    const contentType3 = 'image/png';
    const imageBlob3 = this.base64ToBlob(val20, contentType3);
    console.log(imageBlob3);
    const imageUrl3 = URL.createObjectURL(imageBlob3);
    console.log('Image URL:', imageUrl3);
    if (label20) {
      this.imageURL3 = imageUrl3;
    }
    const label21 = document.getElementById('imageFetch4');
    const val21 = await this.storage.get('file-4');
    const contentType4 = 'image/png';
    const imageBlob4 = this.base64ToBlob(val21, contentType4);
    console.log(imageBlob4);
    const imageUrl4 = URL.createObjectURL(imageBlob4);
    console.log('Image URL:', imageUrl4);
    if (label21) {
      this.imageURL4 = imageUrl4;
    }
    const label22 = document.getElementById('imageFetch5');
    const val22 = await this.storage.get('file-5');
    const contentType5 = 'image/png';
    const imageBlob5 = this.base64ToBlob(val22, contentType5);
    console.log(imageBlob5);
    const imageUrl5 = URL.createObjectURL(imageBlob5);
    console.log('Image URL:', imageUrl5);
    if (label22) {
      this.imageURL5 = imageUrl5;
    }
    const label23 = document.getElementById('sourceVehicleFetch');
    const val23 = await this.storage.get('sourceVehicle');
    if (label23) {
      label23.innerHTML = val23;
    }
    const label24 = document.getElementById('destinationVehicleFetch');
    const val24 = await this.storage.get('destinationVehicle');
    if (label24) {
      label24.innerHTML = val24;
    }
  }
  base64ToBlob(base64String: string, contentType: string = ''): Blob {
    const byteCharacters = atob(base64String.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
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
