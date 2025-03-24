import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 onRoleChange$:Subject<string>=new Subject<string>;
 onRoleBehaviorChange$:BehaviorSubject<string>=new BehaviorSubject<string>("");

  apiUrl:string='';
  constructor(private http:HttpClient) {}


   getAllDept(){
    debugger;
    return this.http.get(this.apiUrl+"/GetParentDepartment");
        }

    addNewDept(obj:any){
      debugger;
return this.http.post(`${this.apiUrl}/AddNewDepartment`,obj);
    }


}
