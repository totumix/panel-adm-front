import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutingPath } from "./configs/routing-path";
//COMPONENTS
import { SsoLayoutComponent } from "./layouts/sso-layout/sso-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { AuthGuard } from "./configs/auth.guard";
const routes: Routes = [
  {
    path: "",
    redirectTo:
      RoutingPath.appRouting.components.sso.path +
      "/" +
      RoutingPath.appRouting.components.sso.pages.login.path,
    pathMatch: "full"
  },
  {
    path: RoutingPath.appRouting.components.sso.path,
    component: SsoLayoutComponent,
    loadChildren: () => import('./components/sso/sso.module').then(m => m.SsoModule)
  },
  {
    path: RoutingPath.appRouting.components.main_dashboard.path,
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
