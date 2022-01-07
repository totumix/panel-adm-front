import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainDashboardRoutingModule } from "./main-dashboard-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

//SERVICES

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ]
})
export class MainDashboardModule { }
