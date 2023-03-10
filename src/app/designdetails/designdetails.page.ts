import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../services/quantity.service';

@Component({
  selector: 'app-designdetails',
  templateUrl: './designdetails.page.html',
  styleUrls: ['./designdetails.page.scss'],
})
export class DesigndetailsPage implements OnInit {

  constructor(public quantityService: QuantityService) { }

  ngOnInit() {
  }

  incrementQuantity(index: number) {
    this.quantityService.incrementQuantity(index);
  }
  
  decrementQuantity(index: number) {
    this.quantityService.decrementQuantity(index);
  }

}
