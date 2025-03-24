import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userObj:any={
  username:'',
  password:''
}
router=inject(Router)
http=inject(HttpClient)

onLogin(){
// api login and verification
// this.http.post("https://projectapi.gerasim.in/api/Users/Login", this.userObj).subscribe((res:any)=>{
//   if(res.result) {
//     alert("login Success");
//     localStorage.setItem('loginUser', JSON.stringify(res.data) )
//     this.router.navigateByUrl('add-emp')
//   } else {
//     alert(res.message)
//     this.router.navigateByUrl('add-emp')
//   }
// })

  //Hard code login-----
  if(this.userObj.username=="admin" && this.userObj.password=="admin@123"){
alert('Login successful')
localStorage.setItem('loginUser',this.userObj.username)
this.router.navigateByUrl('add-emp')
  }else{
    alert('wrong credentials')
  }
}
}
