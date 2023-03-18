import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { QuantityService } from '../services/quantity.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-userorderdetails',
  templateUrl: './userorderdetails.page.html',
  styleUrls: ['./userorderdetails.page.scss'],
})
export class UserorderdetailsPage implements OnInit {
  public dateTimeFormatted: string = "";
  order: any = {};
  id: any;
  imageUrl: string = null;

  dataOrder: any = {};
  statusOrder: string = "";

  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    public quantityService: QuantityService,
    private storage: AngularFireStorage
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
    this.setDateFormatted(quantityService.datebooking);
  }

  ngOnInit() {
    this.getOrderDetails(this.id);
  }

  async getOrderDetails(id: string) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait..."
    });
    (await loader).present();
    this.firestore.doc("orders/" + id)
      .valueChanges()
      .subscribe((data: any) => {
        this.order.useremail = data["useremail"];
        this.order.itemcount = data["itemcount"];
        this.order.orderaccepted = data["orderaccepted"];
        this.order.orderdateunique = data["orderdateunique"];
        this.order.bookingdate = data["bookingdate"];
        this.quantityService.setItemQuantities(this.order.itemcount);
        this.setDateFormatted(this.order.bookingdate);
        this.getReceiptImage(this.order.orderdateunique, this.order.useremail);

        if (data["orderaccepted"] == 'success') {
          this.statusOrder = "Accepted";
        } else if (data["orderaccepted"] == 'rejected') {
          this.statusOrder = "Rejected";
        } else {
          this.statusOrder = "Pending";
        }

        //use for data update
        this.dataOrder = this.order;
      });
    //dismiss loader
    (await loader).dismiss();
  }

  async getReceiptImage(dateUnique: string, useremail: string): Promise<void> {
    const imageReceiptPath = `imagereceipt/${dateUnique}/receipt_${useremail}`;
    try {
      const ref = this.storage.ref(imageReceiptPath);
      const imageUrl = await ref.getDownloadURL().toPromise();
      this.imageUrl = imageUrl;
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  setDateFormatted(formatteddatetime: string) {
    const date = new Date(formatteddatetime);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    this.dateTimeFormatted = `${formattedDate}`;
  }

  checkPcs(quantity: number) {
    if (quantity <= 0) {
      return false;
    } else {
      return true;
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}
