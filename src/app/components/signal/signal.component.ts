import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush  //disabling change detection
})
export class SignalComponent {
firstName=signal('angular');
lastName=signal('18')
cityList=signal(['Noida','Delhi'])
studentObj=signal({name:"abc",city:"chandigarh",rollNo:"123"})
rollNo=signal<number>(123);
courseName:string='Java'
fullName=computed(()=>this.firstName()+" "+this.lastName())

constructor(){
const fName=this.firstName();

setTimeout(()=>{
this.firstName.set("React")
this.lastName.set("JS")
this.cityList.set([...this.cityList(),"Chandigarh"])
this.studentObj.set({...this.studentObj(),city:"Noida"})

this.courseName="Dot Net"
},5000)
}

changeName(){
  this.firstName.set("Reactjs")
}
}
