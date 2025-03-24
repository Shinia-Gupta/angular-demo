import { Component } from '@angular/core';
import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {NaPipe} from '../../pipes/na.pipe'
import { Observable, interval, map } from 'rxjs';
import { DepartmentService } from '../../services/department.service';


@Component({
  selector: 'app-pipe',
  standalone:true,
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = "this is a demo session";

  currentDate: Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;

  student: any = {
    name:'Chetan',
    city:'Pune',
    empId:323,
    state: undefined
  };
  currentRole: string = '';

  constructor(private deptSrv:DepartmentService) { 
    this.currentTime= interval(1000).pipe(map(() => new Date()));
  this.deptSrv.onRoleChange$.subscribe((res:string)=>{
    debugger;
    this.currentRole=res;
  })
  this.deptSrv.onRoleBehaviorChange$.subscribe((res:string)=>{
    debugger;
    this.currentRole=res;
  })
  }
}
