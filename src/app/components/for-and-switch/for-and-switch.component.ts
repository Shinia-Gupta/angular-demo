import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-for-and-switch',
  imports: [CommonModule,FormsModule],
  templateUrl: './for-and-switch.component.html',
  styleUrl: './for-and-switch.component.css'
})
export class ForAndSwitchComponent {
dayNumber:string='1';
cityArray:string[]=['Pune','Mumbai','Nagpur']
studentList: any[] = [
  {studId:12, name:'AAA', city: 'Pune',   isActive:  false},
  {studId:22, name:'BBB', city: 'Mumbai', isActive:  false},
  {studId:32, name:'CC', city: 'Jalgao', isActive:  true},
  {studId:56, name:'DD', city: 'Mumbai', isActive:  false},
  {studId:34, name:'EE', city: 'Nagpur', isActive:  false},
  {studId:76, name:'FFF', city: 'Thane', isActive:  true},
]



}
