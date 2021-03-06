import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { CustomerCentralServService } from '../customer-central-serv.service';
import { CustomerTableComponent } from '../customer-table/customer-table.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']

})
export class CustomerFormComponent implements OnInit{

  constructor(private customerCentral:CustomerCentralServService) {   }
  
  @ViewChild('myForm') userForm;
  // @ViewChild('CustomerTableComponent') cusTab;

  ngOnInit() {
    
  }

  // exercise-1 variables___________________________________________

  customerName:string='';
  customerEmail:string;
  customerAddress:string='';
  // customerAddress:string=this.customerCentral.getAddressData() || '';
  customerList:Array<any>=[];

  emailArray=[];
  isSubmitted:boolean=true;
  inputMissing:boolean=false;
  emailExist:boolean=false;
  addressMissing:boolean=false;
  showTable:boolean=false;
  editMode:boolean=false;
  editedObject:{id:number, name:string, email:string, address:string, status:string};
  objIndex:number;

  private subscription:Subscription = this.customerCentral.editableObj.subscribe( obj => { 
  this.customerName=obj.name;
  this.customerEmail=obj.email;
 this.customerAddress=obj.address;
  (<HTMLInputElement>document.getElementById(obj.status)).checked=true;
  });

  private addressSubsc:Subscription= this.customerCentral.formAddress.subscribe(address => { this.customerAddress=address; }); 
  // exercise-1 functions___________________________________________

  // This function checks if the entered email already exist or not
  checkEmail(emailInput: string){
    if(this.emailArray.includes(emailInput)==true){this.emailExist=true;}
    else{this.emailExist=false;}
  }

  //this function gets address from child component
  // getAddress(event: string)
  // {  
  //   this.customerAddress = event; 
  // }

  //this function gets the object to be edited
  // getEditobj(eventObj){
  //   this.objIndex=this.customerList.findIndex(ob => ob.email == eventObj.email);
  //  this.customerName=eventObj.name;
  //  this.customerEmail=eventObj.email;
  //  this.customerAddress=eventObj.address;
  //   (<HTMLInputElement>document.getElementById(eventObj.status)).checked=true;
  // } 
  
  //this function submits/edits the details filled inside customer form
  onSubmit(){
    (<HTMLInputElement>document.getElementById('inputFieldEmail')).disabled=false;
    if(document.getElementById('submitBtn').innerHTML!="Edit") //when edit mode is OFF
    { this.editMode=false;
        if(this.customerName!='' && this.customerEmail!='' && this.customerAddress!='' && (<HTMLInputElement>document.querySelector('input[name="status"]:checked')))
        {
          this.inputMissing=false;
          this.isSubmitted=false;
          this.addressMissing=false;
          this.emailArray.push(this.customerEmail);
          this.customerList.push({id:(this.customerList.length+1), name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value});
          // this.customerCentral.setDisplayArray(this.customerList);
          this.customerCentral.formDataArray.emit(this.customerList);
          
          // this.customerCentral.formAddress.emit(this.customerAddress);
          this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
          this.userForm.reset();
          this.customerAddress='';
          this.customerCentral.emptyAddress.emit(this.customerAddress);
          
          (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
        
        }
        else if( !(<HTMLInputElement>document.querySelector('input[name="status"]:checked')))
        {
              this.inputMissing=true;
        } 
    }
    else {//when edit Mode is ON
      this.editMode=true;
      (<HTMLInputElement>document.getElementById('inputFieldEmail')).disabled=false;
      if(!(<HTMLInputElement>document.querySelector('input[name="status"]:checked')))
      {
        this.inputMissing=true;
      }
      else
      {
        this.inputMissing=false;
        this.emailExist=false;
        this.editedObject= { id:(this.customerList.length+1), name:this.customerName, email:this.customerEmail, address:this.customerAddress, status:(<HTMLInputElement>document.querySelector('input[name="status"]:checked')).value };
        this.objIndex=this.customerList.findIndex(ob => ob.email == this.editedObject.email);
        this.customerList[this.objIndex]=this.editedObject;
        this.customerList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.userForm.reset();
        this.customerAddress='';
        this.customerCentral.emptyAddress.emit(this.customerAddress);
          (<HTMLInputElement>document.querySelector('input[type=radio][name=status]:checked')).checked = false;
          (<HTMLInputElement>document.getElementById('submitBtn')).innerHTML="Submit";

        }
      }

    

  }

}



