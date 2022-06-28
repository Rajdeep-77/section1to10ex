import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']

})
export class CustomerFormComponent implements OnInit, OnChanges{

  constructor() { }
  ngOnChanges() {
  }
  ngOnInit() {
    
  }

  // exercise-1 variables___________________________________________

  customerName:string;
  customerEmail:string;
  customerAddress:string='';
  customerList:Array<any>=[];

  isSubmitted:boolean=true;
  inputMissing=false;
  addressMissing=false;
  showTable:boolean=false;

  newToEdit:object;
  newId:number
  newName:string;
  newEmail:string;
  newAddress:string;


  // exercise-1 functions___________________________________________

  //this function gets address from child component
  getAddress(event: string) {  
    this.checkAddress()

    this.customerAddress = event; 
  }

  //this function gets the object to be edited
  getEditName(event){
    this.newId=event.id
    this.newName==event.name;
    this.newEmail==event.email;
    this.newAddress==event.address;
    // (<HTMLInputElement>document.getElementById('inputFieldName')).value==event.name;
    // (<HTMLInputElement>document.getElementById('inputFieldEmail')).value==event.email;
    // (<HTMLInputElement>document.getElementById('inputFieldAddress')).value==event.address;
    console.log(event.id)
    console.log(event.name)
    console.log(event.email)
    console.log(event.address)
  }

  //this will run when a object is needed to be edited
  editMode(){
      console.log("vsvsvdvsdd");
      (<HTMLInputElement>document.getElementById('inputFieldName')).value==this.newName;
      (<HTMLInputElement>document.getElementById('inputFieldEmail')).value==this.newEmail;
      (<HTMLInputElement>document.getElementById('inputFieldAddress')).value==this.newAddress;
   
  }

  //this function submits the details filled inside customer form
  onSubmit(){

    if(this.customerName!='' && this.customerEmail!='' && this.customerAddress!='' && (<HTMLInputElement>document.querySelector('input[name="status"]:checked')))
    {
    this.inputMissing=false;
    this.isSubmitted=false;
   this.addressMissing=false;
    this.customerList.push({id:(this.customerList.length+1), name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value});
    this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    (<HTMLInputElement>document.getElementById('inputFieldName')).value='';
    (<HTMLInputElement>document.getElementById('inputFieldEmail')).value='';
    (<HTMLInputElement>document.getElementById('inputFieldAddress')).value='';
    (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
    }
    else if( !(<HTMLInputElement>document.querySelector('input[name="status"]:checked'))){
      this.inputMissing=true;
    }
    else if(this.customerAddress!='[A-Za-z0-9]+'){
      this.addressMissing=true;
    }

  }

 //this function checks the address validity
  checkAddress(){
    console.log("hii")
    if(this.customerAddress!='[A-Za-z0-9]+'){
      this.addressMissing=true;
    }
    else
    {
      this.addressMissing=false;
    }
    }
  
}



