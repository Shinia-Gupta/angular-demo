import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-attribute-directive',
 standalone:true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
div1BgColor:string='bg-primary'
isDivActive:boolean=false;
num1:string=''
num2:string=''
isActive:boolean=true
studentList: any[] = [
  {studId:22, name:'BBB',totalMarks:90, city: 'Mumbai', isActive:  false, gender:"male"},
  {studId:12, name:'AAA',totalMarks:80, city: 'Pune',   isActive:  false, gender:"female"},
  {studId:32, name:'CC',totalMarks:70, city: 'Jalgao', isActive:  true, gender:"male"},
  {studId:56, name:'DD', totalMarks:93,city: 'Mumbai', isActive:  false, gender:"female"},
  {studId:34, name:'EE', totalMarks:50,city: 'Nagpur', isActive:  false, gender:"female"},
  {studId:76, name:'FFF',totalMarks:35, city: 'Thane', isActive:  true, gender:"male"},
]

customerStyle: any = {
  'color':'white',
  'background-color': 'red',
  'width': '200px',
  'height': '200px',
  'border-radius': '50%',
  'text-align':'center'
};

addRedClass(){
  this.div1BgColor="bg-danger"
}

addBlueClass(){
  this.div1BgColor="bg-primary"
}

toggleDiv2Class(){
  this.isDivActive=!this.isDivActive;
}

}
