import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//COMPONENTS
import { SsoLayoutComponent } from "./layouts/sso-layout/sso-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";

//NGRX

//MODULES
import { SsoLayoutModule } from "./layouts/sso-layout/sso-layout.module";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BackendService } from './configs/backend.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./configs/services/auth-interceptor.service";

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, SsoLayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    SsoLayoutModule,
  ],
  providers: [
    BackendService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
