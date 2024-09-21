import { Component, inject } from '@angular/core';

import { FormsModule } from "@angular/forms"
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  loginObj:any = {

    "EmailId":"admin@gmail.com",
    "Password":"12345678"

  }

  userService  = inject(UserService)

  login(){

    this.userService.onLogin(this.loginObj).subscribe((res:any)=>{

      if(res.result){

        localStorage.setItem("userApp",JSON.stringify(res.data))

    


      }else{

        alert(res.message)

      }

    })

  }



}
