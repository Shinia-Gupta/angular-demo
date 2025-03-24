import { Component, ElementRef, ViewChild, AfterViewInit, viewChild } from '@angular/core';
import { AlertComponent } from '../../reusable-components/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {
  //accessing an html element
  @ViewChild('txt') textBox?: ElementRef;

  //accessing a component. Need to create an object of the alert component
  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    debugger;
    const alertMode =  this.alertComp?.alertMode;
  }


}