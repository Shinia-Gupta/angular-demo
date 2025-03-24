import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
//Datatypes-String,boolean,number,date

courseName:string="Angular 18";
inputType="checkbox"
rollNo:number=123;
isIndian:boolean=false;
myClassname:string="bg-primary"
stateName="Haryana"
firstName=signal("abc")
constructor(){}

showAlert(message:string){
  alert(message);
}

changeCourseName(courseName:string){
  this.courseName=courseName;
  this.firstName.set("Sachin")
}

}
