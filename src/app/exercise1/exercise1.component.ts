import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
 
  //Find length of string variable....
  txtString:string="";
  btnEnable=false;
  txtStringLength=0;


  //Display name and age object....
  person={
    txtName:"",
    txtAge:""};
    txtDisplay=[];
    btnHide=false;

  //Display name and age array....
  array=[];
  txtStringName;
  txtStringAge;
  txtDisplayArray="";

  //Display odd or even number variable....
  txtNumber;
  txtEven='even nuumber';
  txtOdd='odd number';

  constructor() { }

  ngOnInit() {
  }
//Find a length of input string...
  onTxtStringLength(){
    this.txtStringLength = this.txtString.length;
    this.btnEnable=false;
    this.txtString=null;
  }
  //Display array of object...

  onTxtDisplay(){
    this.txtDisplay.push([this.person.txtName,this.person.txtAge]);
    this.btnHide=true;
    this.person.txtName=null;
    this.person.txtAge=null;
  }
  //Display array of value....
  onArrayDisplay() {
    this.array.push([this.txtStringName,this.txtStringAge]);
    this.txtStringName=null;
    this.txtStringAge=null;
  }
}
