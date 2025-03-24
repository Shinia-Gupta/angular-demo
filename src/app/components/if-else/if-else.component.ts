import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
import { DepartmentService } from '../../services/department.service';
@Component({
  selector: 'app-if-else',
  imports: [FormsModule,CommonModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  div1Visible:boolean=true;
  isWarningDivVisible:boolean=true;
  num1:string='';
  num2:string='';
  selectedStatus:string='';
currentRole:string=''
  constructor(private deptSrv:DepartmentService){
    this.deptSrv.onRoleChange$.subscribe((res:string)=>{
      this.currentRole=res;
    })
    this.deptSrv.onRoleBehaviorChange$.subscribe((res:string)=>{
      this.currentRole=res;
    })
  }
  hideDiv1(){
    this.div1Visible=false;
  }

  showDiv1(){
    this.div1Visible=true;
  }

  toggleDiv2(){
    this.isWarningDivVisible=!this.isWarningDivVisible;
  }
}
