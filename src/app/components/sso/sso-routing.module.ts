import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingPath } from "./../../configs/routing-path";
//COMPONENTS
import { LoginComponent } from "./pages/login/login.component";
import { SignupUserComponent } from "./pages/signup-user/signup-user.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: RoutingPath.appRouting.components.sso.pages.login.path,
        component: LoginComponent
      },
      {
        path: RoutingPath.appRouting.components.sso.pages.signup_user.path,
        component: SignupUserComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.components.sso.pages.signup_user.breadcrumb
        }
      },
      {
        path: RoutingPath.appRouting.components.sso.pages.reset_password.path,
        component: ResetPasswordComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.components.sso.pages.reset_password.breadcrumb
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsoRoutingModule {}
