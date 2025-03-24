import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

constructor(private router:Router){

}

  isDiv1Visible:boolean=false;
isDiv2Visible:boolean=false;
isBoxChecked:boolean=false;
num1:string='';
num2:string='';
selectedState:string=''
cityArray:string[]=['Pune','Mumbai','Nagpur']
studentList: any[] = [
  {studId:12, name:'AAA', city: 'Pune',   isActive:  false},
  {studId:22, name:'BBB', city: 'Mumbai', isActive:  false},
  {studId:32, name:'CC', city: 'Jalgao', isActive:  true},
  {studId:56, name:'DD', city: 'Mumbai', isActive:  false},
  {studId:34, name:'EE', city: 'Nagpur', isActive:  false},
  {studId:76, name:'FFF', city: 'Thane', isActive:  true},
]

  hideDiv1(){
    this.isDiv1Visible=false;
  }

  showDiv1(){
    this.isDiv1Visible=true;
  }

  toggleDiv2(){
this.isDiv2Visible=!this.isDiv2Visible;
  }

  goToAttributeDir(){
this.router.navigateByUrl("attribute-dir")
  }
}
