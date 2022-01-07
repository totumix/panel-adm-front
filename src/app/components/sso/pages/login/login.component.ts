import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { BackendService } from 'src/app/configs/backend.service';
import { ConstRoutesService } from 'src/app/configs/const-routes.service';
import { IUser } from '../../../../core/models/user';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: "sl-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showPassword: boolean = false;;
  public error: boolean;
  public identity;
  public token;
  public user;

  constructor(
    private _userService: AuthService,
    private _backendService: BackendService,
    private router: Router,
    private _fb: FormBuilder,
    private _constRoutes: ConstRoutesService,
  ) {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  showPass() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(user) {
    console.log(user)
    this.user = user;
    this._userService.login('login', user).subscribe(
      async res => {
        let { user } = await res;
        localStorage.setItem('identity', JSON.stringify(user))
        this.getToken();
      },
      error => {
        this._backendService.handleError(error)
      })
  }

  getToken() {
    this._userService.login('login', this.user, true).subscribe(async res => {
      let { token } = await res;
      localStorage.setItem('token', token)
      this.router.navigate([
        `${this._constRoutes.mainDashboardModuleUrl}/${this._constRoutes.mainDashboardHomeUrl}`
      ]);
    },
      error => {
        this._backendService.handleError(error)
      })
  }
}
