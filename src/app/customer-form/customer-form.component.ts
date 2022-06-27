import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']

})
export class CustomerFormComponent implements OnInit{

  constructor() { }
  ngOnInit() {
   

  }


  // exercise-1 variables___________________________________________

  customerName:string;
  customerEmail:string;
  customerAddress:string='';

  customerStatus:any='';
  
  // gettingStatus(){
  //    if ((<HTMLInputElement>document.getElementById('statusActive')).checked) {
  //     this.customerStatus = (<HTMLInputElement>document.getElementById('statusActive')).value;
  //   }
  //   if ((<HTMLInputElement>document.getElementById('statusInactive')).checked) {
  //     this.customerStatus = (<HTMLInputElement>document.getElementById('statusInactive')).value;
  //   }
  // }

  // gettingStatus(){
  //   if ((<HTMLInputElement>document.getElementById('statusActive')).checked) {
  //     this.customerStatus = (<HTMLInputElement>document.getElementById('statusInactive')).value;
  //   }
  // }
  // customerStatus:string=(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value;

  customerDetails:{ name:string, email:string, address:string, status:string } ={
    name: '',
    email: '',
    address: '',
    status:''
  };
  customerList:Array<any>=[];
  isSubmitted:boolean=true;
  inputMissing=false;
  showTable:boolean=false;
  newToEdit:string;



  // exercise-1 functions___________________________________________

  //this function gets address from child component
  getAddress(event: string) {  this.customerAddress = event; }

  //this function sets the value of customer status
  // onStatusSelected(value:string) {
  //   this.customerStatus = value;
  // };

  //this function submits the details filled inside customer form
  onSubmit(){

    
    if(this.customerName!='' && this.customerEmail!='' && this.customerAddress!='' && (<HTMLInputElement>document.querySelector('input[name="status"]:checked'))){
    this.inputMissing=false;
    this.isSubmitted=false;
   
    // this.customerDetails=;
    this.customerList.push({name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value});
    this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
    }
    

    else if(this.customerName=='' || this.customerEmail=='' || this.customerAddress=='' || !(<HTMLInputElement>document.querySelector('input[name="status"]:checked'))){
      this.inputMissing=true;
    }
    // if(this.customerName!="[A-Za-z0-9]+"){
    //   document.getElementById('nameInputError').style.display="block";
    // }
  }

  // this function gets name property of object to be editted
  getEditName(event: string) {  this.newToEdit = event; }

  //this function edits the details filled inside customer form
  onEditForm(){
    if(this.customerName=='' || this.customerEmail=='' || this.customerAddress=='' || !(<HTMLInputElement>document.querySelector('input[name="status"]:checked'))){
      this.inputMissing=true;
    }
    else{
      this.inputMissing=false;
      // this.isSubmitted=false;
     
      // this.customerDetails=;
      // var objectToBeEdit=this.customerList.map((obj)=>{return obj.name==this.newToEdit;})
      // console.log("The ooooo "+objectToBeEdit)
      // this.customerList.push({name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value});
      // this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      // (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
      // (<HTMLInputElement>document.getElementById('editBtn')).style.display='none';
      // (<HTMLInputElement>document.getElementById('submitBtn')).style.display='block';

      (<HTMLInputElement>document.getElementById('inputFieldName')).value=='';
      (<HTMLInputElement>document.getElementById('inputFieldEmail')).value=='';
      (<HTMLInputElement>document.getElementById('inputFieldAddress')).value=='';
      
    }
      
  
      
  }

}




