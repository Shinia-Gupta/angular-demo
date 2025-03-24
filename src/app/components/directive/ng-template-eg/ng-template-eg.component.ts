import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-eg',
  imports: [CommonModule],
  templateUrl: './ng-template-eg.component.html',
  styleUrl: './ng-template-eg.component.css'
})
export class NgTemplateEgComponent {
isUserLoggedIn:boolean=true;
loggedInUsername:string='ABC'

@ViewChild('dynamicTemp1') dynamicTemp1:TemplateRef<any>|undefined;
@ViewChild('dynamicTemp2') dynamicTemp2:TemplateRef<any>|undefined;
@ViewChild('dynamicTemp3') dynamicTemp3:TemplateRef<any>|undefined;
@ViewChild('dynamicContainer',{read:ViewContainerRef}) dynamicContainer:ViewContainerRef|undefined;

loadTemplate1(){
  this.dynamicContainer?.clear();
  if(this.dynamicTemp1){
    this.dynamicContainer?.createEmbeddedView(this.dynamicTemp1);
  }
}
  loadTemplate2(){
    this.dynamicContainer?.clear();
    if(this.dynamicTemp2){
      this.dynamicContainer?.createEmbeddedView(this.dynamicTemp2);
    }
  }
    loadTemplate3(){
      this.dynamicContainer?.clear();
      if(this.dynamicTemp3){
        this.dynamicContainer?.createEmbeddedView(this.dynamicTemp3);
      }
}

}

