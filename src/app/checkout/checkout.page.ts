import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../services/quantity.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public dateTimeFormatted: string = "";

  constructor(public quantityService: QuantityService) {
    this.setDateFormatted(quantityService.datebooking)
  }

  ngOnInit() {
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

}
