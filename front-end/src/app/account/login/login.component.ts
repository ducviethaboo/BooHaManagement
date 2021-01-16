import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  account!: any;
  password!: any;


  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.account, this.password).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
