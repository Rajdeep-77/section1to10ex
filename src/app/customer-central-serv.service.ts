import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerCentralServService {

  constructor() { }

  serviceAddress:string;
  detailArray:Array<any>;
  // setObjToBeEdited(obj){
  //   this.editableObj=obj;
  // }

  // getObjToBeEdited(){
  //   return this.editableObj;
  // }

  setDisplayArray(arr){
    this.serviceAddress=arr;
  }

  getDisplayArray(){
    return this.detailArray;
  }


  setAddressData(add){
    this.serviceAddress=add;
  }

  getAddressData(){
    return this.serviceAddress;
  }


}

