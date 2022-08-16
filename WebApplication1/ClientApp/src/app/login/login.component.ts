import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  isloggedIn: boolean = false;
  constructor(private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    localStorage.clear();
    this.isloggedIn = localStorage.getItem('LoggedIn') == 'true';
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    localStorage.clear();
    // TODO: Use EventEmitter with form value
    this.loginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).then(
      res => {
        console.log(res)
        if (res) {
          localStorage.setItem('LoggedIn', JSON.stringify(res));
          this.router.navigate(['dashboard'], {relativeTo: this.route});
        }
      });

    console.log(this.loginForm.value);
  }

}
