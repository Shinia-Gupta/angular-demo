import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddEmployeeListComponent } from './components/add-employee-list/add-employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import {StructuralDirComponent} from './components/directive/structural-dir/structural-dir.component'
import {AttributeDirectiveComponent} from './components/directive/attribute-directive/attribute-directive.component'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}

  // imports: [RouterOutlet,AddEmployeeComponent,AddEmployeeListComponent,DataBindingComponent,StructuralDirComponent],
