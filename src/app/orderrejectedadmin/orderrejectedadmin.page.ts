import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-orderrejectedadmin',
  templateUrl: './orderrejectedadmin.page.html',
  styleUrls: ['./orderrejectedadmin.page.scss'],
})
export class OrderrejectedadminPage implements OnInit {
  orders: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getOrders();
  }

  async getOrders() {
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();
    try {
      this.firestore
        .collection("orders")
        .snapshotChanges()
        .subscribe(data => {
          this.orders = data.map((e: any) => {
            return {
              id: e.payload.doc.id,
              email: e.payload.doc.data()["useremail"],
              orderaccepted: e.payload.doc.data()["orderaccepted"],
            };
          });
          this.orders = this.orders.filter((item: any) => item.orderaccepted === 'rejected')
          loader.dismiss();
        });

    } catch (e: any) {
      this.showToast(e);
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}
