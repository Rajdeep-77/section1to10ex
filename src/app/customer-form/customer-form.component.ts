import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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

  newObject:object;
  newId:number


  // exercise-1 functions___________________________________________

  //this function gets address from child component
  getAddress(event: string)
  {  
    // this.checkAddress()
    this.customerAddress = event; 
  }

  //this function gets the object to be edited
  getEditId(event){
    this.newId=event.id;
   this.customerName=event.name;
   this.customerEmail=event.email;
   this.customerAddress=event.address;
    (<HTMLInputElement>document.getElementById(event.status)).checked=true;

  }

  //this function submits/edits the details filled inside customer form
  onSubmit(){
    if(document.getElementById('submitBtn').innerHTML!="Edit") //when edit mode is OFF
    {
        if(this.customerName!='' && this.customerEmail!='' && this.customerAddress!='' && (<HTMLInputElement>document.querySelector('input[name="status"]:checked')))
        {
          this.inputMissing=false;
          this.isSubmitted=false;
          this.addressMissing=false;
          this.customerList.push({id:(this.customerList.length+1), name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value});
          this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
          this.customerName='';
          this.customerEmail='';
          this.customerAddress='';
              // (<HTMLInputElement>document.getElementById('inputFieldName')).value='';
              // (<HTMLInputElement>document.getElementById('inputFieldEmail')).value='';
              // (<HTMLInputElement>document.getElementById('inputFieldAddress')).value='';
              (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
        }
        else if( !(<HTMLInputElement>document.querySelector('input[name="status"]:checked')))
        {
              this.inputMissing=true;
        }
        else if(this.customerAddress!='[A-Za-z0-9]+')
        {
              this.addressMissing=true;
        }
    }
    else {//when edit Mode is ON
      if(!(<HTMLInputElement>document.querySelector('input[name="status"]:checked'))){
        this.inputMissing=true;
      }
      else
      {
        this.inputMissing=false;
        // const replaceObject=this.customerList.filter(obj => {return obj.id==this.newId;});
        
        this.newObject= { id:(this.customerList.length-1), name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value};
        
        this.customerList[this.newId-1]=this.newObject;
        this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        this.customerName='';
        this.customerAddress='';
        this.customerEmail='';
          // (<HTMLInputElement>document.getElementById('inputFieldName')).value='';
          // (<HTMLInputElement>document.getElementById('inputFieldEmail')).value='';
          // (<HTMLInputElement>document.getElementById('inputFieldAddress')).value='';
          (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
          (<HTMLInputElement>document.getElementById('submitBtn')).innerHTML="Submit";

          // console.log("()))))"+ JSON.stringify(this.newObject));
          // console.log("--__--"+ JSON.stringify(replaceObject));
        }
      }

    

  }

 //this function checks the address validity
  checkAddress(){
    // console.log("hii")
    if(this.customerAddress!='[A-Za-z0-9]+'){
      this.addressMissing=true;
    }
    else
    {
      this.addressMissing=false;
    }
    }
  
}



