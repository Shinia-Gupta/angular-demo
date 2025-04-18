import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
@Input() message:string='';
@Input() alertType:string='';
alertMode:string="alert mode in alert component"

ngOnChanges(){
  console.log("ngOnChanges in alert");
  
}
}
