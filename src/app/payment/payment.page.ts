import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { QuantityService } from '../services/quantity.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  selectedFile: File = null;
  isUploading = false;

  constructor(
    private storage: AngularFireStorage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    public quantityService: QuantityService
  ) {
  }

  ngOnInit() {
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  async onSubmit(): Promise<void> {
    const orderdateunique = new Date().getTime();
    const useremaillocalstore = localStorage.getItem('useremail');
    if (this.selectedFile) {
      const filePath = `imagereceipt/${orderdateunique}/receipt_${useremaillocalstore}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      this.createOrder(orderdateunique);
      this.isUploading = true;

      task.then(async () => {
        this.isUploading = false;
      });
    }
  }

  async createOrder(orderdateunique: any) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "please wait..."
    });
    (await loader).present();

    const useremaillocalstore = localStorage.getItem('useremail');
    const dataorder = {
      useremail: useremaillocalstore,
      itemcount: this.quantityService.itemQuantities,
      bookingdate: this.quantityService.datebooking,
      orderdateunique: orderdateunique,
      orderaccepted: 'pending',
    }

    try {
      await this.firestore.collection("orders").add(dataorder);
    } catch (e: any) {
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    const toast = await this.toastCtrl.create({
      message: 'Successfully place order',
      duration: 3000,
    });
    await toast.present();

    //redirect to home page
    this.navCtrl.navigateRoot("designdetails");
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}
