import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  itemQuantities: number[] = [0, 0, 0, 0, 0, 0];
  datebooking: string = "";

  incrementQuantity(index: number) {
    this.itemQuantities[index]++;
  }
  
  decrementQuantity(index: number) {
    if (this.itemQuantities[index] > 0) {
      this.itemQuantities[index]--;
    }
  }

  setDateBooking(dateparam: string) {
    this.datebooking = dateparam;
  }

  constructor() { }
}
