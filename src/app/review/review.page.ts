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
    const label1 = document.getElementById('label1');
    const val1 = await this.storage.get('value2');
    if (label1) {
      label1.innerHTML = val1;
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
