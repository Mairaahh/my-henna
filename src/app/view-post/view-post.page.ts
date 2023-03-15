import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.page.html',
  styleUrls: ['./view-post.page.scss'],
})
export class ViewPostPage implements OnInit {
  userProfile: any = {};

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserProfile();
  }

  async getUserProfile() {
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
      const useremaillocalstore = localStorage.getItem('useremail');
      this.firestore
        .collection("userdetails", (ref) => ref.where("email", "==", useremaillocalstore))
        .snapshotChanges()
        .subscribe((data: any) => {
          if (data.length > 0) {
            const e = data[0];
            this.userProfile = {
              id: e.payload.doc.id,
              fullname: e.payload.doc.data()["fullname"],
              email: e.payload.doc.data()["email"],
              address: e.payload.doc.data()["address"],
              phoneno: e.payload.doc.data()["phoneno"],
            };
          } else {
            this.userProfile = null; // No matching document found
          }

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