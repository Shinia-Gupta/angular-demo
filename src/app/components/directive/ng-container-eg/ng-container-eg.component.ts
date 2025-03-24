import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container-eg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container-eg.component.html',
  styleUrl: './ng-container-eg.component.css'
})
export class NgContainerEgComponent {
  isConatiner: boolean = true;

  http = inject(HttpClient);
  userList: any[]=[];
  isApi: boolean = false;

  getUser(){
    this.isApi = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
      this.isApi = false;
    })
  }
}
