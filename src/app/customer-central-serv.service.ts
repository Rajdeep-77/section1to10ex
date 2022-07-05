import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerCentralServService {

  constructor() { }

  serviceAddress:string;
  detailArray;
  editableObj = new EventEmitter<any>();
  // setObjToBeEdited(obj){
  //   this.editableObj=obj;
  // }

  // getObjToBeEdited(){
  //   return this.editableObj;
  // }

  //This function sets the array to display
  setDisplayArray(arr){
    this.serviceAddress=arr;
  }

  //This function returns the array to display
  getDisplayArray(){
    return this.detailArray;
  }

  //This function sets the address
  setAddressData(add){
    this.serviceAddress=add;
  }

  //This function returns the address
  getAddressData(){
    return this.serviceAddress;
  }

  // This function sets the object to be edited
  setEditObj(obj){
    this.editableObj=obj;
  }
  //This function returns the object to be edited
  getEditObj(){ return this.editableObj;}

}

