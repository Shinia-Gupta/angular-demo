import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../reusable-components/alert/alert.component';
import { IUser } from '../../../model/Interface/IUser';
import { Customer } from '../../../model/class/Customer';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {


  // userList: any[] = [];
    userList: IUser[] = [];
  customerList: Customer[] = []
  constructor(private http: HttpClient) { }

  getAllUsers() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
    })
  }

  getAllCustomers() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res: any) => {
      debugger;
      this.customerList = res.data;
    }, error => {
      debugger;
    })
  }

}
