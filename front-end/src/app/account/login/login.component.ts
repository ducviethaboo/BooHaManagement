import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  account!: any;
  password!: any;
  error!: any;


  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.account, this.password).subscribe(
      (data:any) => {
        if(data === null) {
          this.error = 'Tài khoản không tồn tại'
        } 
        localStorage.setItem('token', data.token)
      }
    )
  }
  
}
