import { Component, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from '../../../../core/models/user';
import { BackendService } from '../../../../configs/backend.service';
import { Console } from "console";
@Component({
  selector: "app-signup-user",
  templateUrl: "./signup-user.component.html",
  styleUrls: ["./signup-user.component.scss"]
})
export class SignupUserComponent {
  public showPassword: boolean;
  public registerForm: FormGroup;
  public user: IUser;
  public checked: boolean;
  public showCheckTerms: boolean;
  public loader: boolean;
  public error: boolean;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @ViewChild("onSubmitAlert") onSubmitAlert: ElementRef;

  constructor(
    private _backendService: BackendService,
    private _fb: FormBuilder,
  ) {
    
    this.showPassword = false;
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    })
  }

  showPass() {
    this.showPassword = !this.showPassword;
  }

  onResetForm(): void {
    this.registerForm.reset();
  }

  onSubmit(user: IUser) {
    console.log(user)
    this._backendService.post('register', user).subscribe(
      res => {
        let { user, message, error } = res;
        this.user = user;
        this.registerForm.reset();
      },
      error => {
        var httpErrorResponse = this._backendService.handleError(error)
        if (httpErrorResponse != null) {
        }
      })
  }
}