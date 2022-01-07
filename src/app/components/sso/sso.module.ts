import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//COMPONENTS
import { LoginComponent } from "./pages/login/login.component";
import { SignupUserComponent } from "./pages/signup-user/signup-user.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
//MODULES
import { SsoRoutingModule } from "./sso-routing.module";
import { SharedModule } from "../../shared/shared.module";
//MATERIAL
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LoginComponent,
    SignupUserComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    SsoRoutingModule,
    SharedModule,
    MatInputModule
  ],
  providers: [],
  exports: []
})
export class SsoModule { }
