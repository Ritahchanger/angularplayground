import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    EmailId: '',
    Password: '',
  };

  userService = inject(UserService);

  router = inject(Router);

  login() {

    debugger;

    this.userService.onLogin(this.loginObj).subscribe((res: any) => {
      if (res.result) {

        localStorage.setItem('userApp', JSON.stringify(res.data));

        this.router.navigateByUrl("user-list")

      } else {

        alert(res.message);


      }
    });
  }
}
