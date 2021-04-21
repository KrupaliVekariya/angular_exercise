import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  //For Bold
  startTag='<b>';
  endTag='</b>';
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
  //For Exercise 1:
  onTxtString(event: Event) {
    this.txtString = (<HTMLInputElement>event.target).value;
  }

  onBtnClick(){
    this.btnEnable=true;
  }
  onTxtStringLength(){
    this.txtStringLength = this.txtString.length;
  }
  //for Exercise 2:
  onTxtName(event: Event){
    this.person.txtName=(<HTMLInputElement>event.target).value;
  }

  onTxtAge(event: Event){
    this.person.txtAge=(<HTMLInputElement>event.target).value;
  }

  onTxtDisplay(){
    this.txtDisplay = this.startTag+this.person.txtName +this.endTag+ " is " + this.person.txtAge + " year's old.";
    this.showBtn1 = false;
    this.showBtn2 = true;
  }

  onBtnHidden(){
      this.showBtn1 = true;
      this.showBtn2 = false;
      this.txtDisplay="";
  }

  //For Exercise 3:
  onTxtStringName(event: Event){
    this.txtStringName=(<HTMLInputElement>event.target).value;
  }
  onTxtStringAge(event: Event){
    this.txtStringAge=(<HTMLInputElement>event.target).value;
  }
  onArrayDisplay() {
    this.array.push({"name":this.txtStringName,"age":this.txtStringAge});
   console.log(this.array);
   this.txtDisplayArray="";
   for(let i=0 ; i<=this.array.length;i++){
    this.txtDisplayArray+= this.array[i]["name"]+ ' is '+this.array[i]["age"]+' years old.' ;
   }
   
    }

  //For Exercise 4:
  onTxtNumber(event:Event){
    this.txtNumber=(<HTMLInputElement>event.target).value;
  }
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
