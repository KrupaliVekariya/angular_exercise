import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
 
  //For Exercise 1:
  txtString:string="";
  btnEnable=false;
  txtStringLength=0;


  //For Exercise 2:
  person={
    txtName:"",
    txtAge:""};
    txtDisplay="";
    showBtn1=true;
    showBtn2=false;

  //For Exercise 3:
  array=[];
  txtStringName;
  txtStringAge;
  txtDisplayArray="";

  //For Exercise 4:
  txtNumber;
  txtDisplayNumber="";
  numberStatus="odd";

  constructor() { }

  ngOnInit() {
  }

 

  onBtnClick(){
    this.btnEnable=true;
  }
  onTxtStringLength(){
    this.txtStringLength = this.txtString.length;
    this.btnEnable=false;
    this.txtString=null;
  }
  //for Exercise 2:

  onTxtDisplay(){
    this.txtDisplay  = this.person.txtName  + " " +this.person.txtAge ;
    // this.showBtn1 = false;
    // this.showBtn2 = true;
  }

  onBtnHidden(){
      // this.showBtn1 = true;
      // this.showBtn2 = false;
      this.txtDisplay="";
  }

  //For Exercise 3:
  onArrayDisplay() {
    this.array.push([this.txtStringName,this.txtStringAge]);
  }

  //For Exercise 4:
  
  onDisplayOddEven(){

    if( this.txtNumber % 2==0){
      this.numberStatus='even';
      this.txtDisplayNumber=this.txtNumber +' is Even Numbar';
    }
    else{
      this.numberStatus='odd';
      this.txtDisplayNumber=this.txtNumber +' is Odd Number';
    } 
  }
  getColor(){
    return this.numberStatus ==='odd' ? 'red' : 'green';
  }
   spanColor='false';
  getBackColor(){
    this.spanColor='true';
   return this.spanColor === 'true' ? 'yellow' : 'white';
  } 
}
