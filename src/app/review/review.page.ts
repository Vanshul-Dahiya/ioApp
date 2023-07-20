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
