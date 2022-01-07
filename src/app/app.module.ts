import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//COMPONENTS
import { SsoLayoutComponent } from "./layouts/sso-layout/sso-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//MODULES
import { SsoLayoutModule } from "./layouts/sso-layout/sso-layout.module";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BackendService } from './configs/backend.service';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, SsoLayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    SsoLayoutModule,
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
