import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerCentralServService {

  constructor() { }

  editableObj;

  setObjToBeEdited(obj){
    this.editableObj=obj;
  }

  getObjToBeEdited(){
    return this.editableObj;
  }
}

