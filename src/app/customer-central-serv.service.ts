import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerCentralServService {

  constructor() { }

  serviceAddress:string;
  detailArray;
  editableObj = new EventEmitter<any>();
  formDataArray = new EventEmitter<any>();
  formAddress = new EventEmitter<any>();
  emptyAddress = new EventEmitter<any>();

  //This function sets the array to display
  setDisplayArray(arr){
    this.detailArray=arr;
  }

  //This function returns the array to display
  getDisplayArray(){
    return this.detailArray;
  }

  // //This function sets the address
  // setAddressData(add){
  //   this.serviceAddress=add;
  // }

  //  //This function returns the address
  //  getAddressData(){
  //   return this.serviceAddress;
  // }

}

