import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.page.html',
  styleUrls: ['./userorder.page.scss'],
})
export class UserorderPage implements OnInit {
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
    const useremaillocalstore = localStorage.getItem('useremail');
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
            let statusorder = "Pending";
            const statusorderfirebase = e.payload.doc.data()["orderaccepted"];
            if(statusorderfirebase == 'success'){
              statusorder = "Accepted";
            }else if(statusorderfirebase == 'rejected'){
              statusorder = "Rejected";
            }
            return {
              id: e.payload.doc.id,
              email: e.payload.doc.data()["useremail"],
              orderaccepted: statusorder,
            };
          });
          this.orders = this.orders.filter((item: any) => item.email === useremaillocalstore)
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
