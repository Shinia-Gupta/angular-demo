import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  selectedRole:string=''
router=inject(Router)
loggedUserData:any;

// constructor(){
//   const loggedData = localStorage.getItem("loginUser");
//   if(loggedData != null) {
//     this.loggedUserData  = JSON.parse(loggedData);
//   }
// }

constructor(private deptSrv:DepartmentService){

}
  logout(){
    if(localStorage.getItem('loginUser')){
      localStorage.removeItem('loginUser')
      this.router.navigateByUrl('login')
      alert('User logged out successfully')
    }else{
      alert('user not logged in')
    }
  }

  onRoleChange(role:string){
    debugger;
this.deptSrv.onRoleChange$.next(role);  //sending the role from the layout component ot the department service observable variable/subject
  this.deptSrv.onRoleBehaviorChange$.next(role);
}
}
