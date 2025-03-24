import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../services/department.service';
import { AlertComponent } from '../../reusable-components/alert/alert.component';
import { ButtonComponent } from '../../reusable-components/button/button.component';
import { Constant } from '../../../../Constants/constant';
import { Department } from '../../../model/class/Customer';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,AlertComponent,ButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  ngOnInit(): void {
    this.getDepartment();
  }

  // deptObj: any = {
  //   "departmentId": 0,
  //   "departmentName": "",
  //   "departmentLogo": ""
  // }

deptObj: Department = new Department();
  deptList: any[] = [];

  http = inject(HttpClient);

constructor(private deptSrv:DepartmentService){
  // deptSrv.apiUrl='https://projectapi.gerasim.in/api/Complaint'
  deptSrv.apiUrl=Constant.API_URL
}

  // onSave() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
  //     debugger;
  //     if (res.result) {
  //       alert("Dept. created successfully")
  //       this.getDepartment();
  //     }
  //   })
  // }

  onSave(){
    // debugger;
    this.deptSrv.addNewDept(this.deptObj).subscribe((res:any)=>{
      // debugger;
      if (res.result) {
        alert("Dept. created successfully")
        this.getDepartment();
      }
    })
  }
  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      // debugger;
      if (res.result) {
        alert("Department Updated Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: any) {
    this.deptObj = data;
  }

  onDelete(deptId:number){
    // debugger;
    const isToBeDeleted=confirm("Are you sure you want to delete?");
    if(isToBeDeleted){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +deptId).subscribe((res: any) => {
      // debugger;
      if(res.result) {
        alert("Department Deleted Success");
        this.getDepartment();
      } else {
        alert(res.message);
      }
      
  })
}
}

  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment", this.deptObj).subscribe((res: any) => {
  //     this.deptList = res.data;
  //   })
  // }

  getDepartment(){
    // debugger;
    this.deptSrv.getAllDept().subscribe((res:any)=>{
      // debugger;
      this.deptList=res.data;
    })
  }

  getData(data:any){
    debugger;
    console.log('Data---'+data);
  }


}
