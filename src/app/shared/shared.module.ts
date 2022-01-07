//MODULES
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

//COMPONENTS
import { IconTextComponent } from './components/icon-text/icon-text.component';
import { AvatarImgComponent } from './components/avatar-img/avatar-img.component';
import { MaterialModule } from "./material/material.module";
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";

//SERVICES
@NgModule({
  declarations: [
    IconTextComponent,
    AvatarImgComponent,
    PasswordFieldComponent,
    ConfirmationDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    //COMPONETS
    IconTextComponent,
    AvatarImgComponent,
    PasswordFieldComponent,
    ConfirmationDialogComponent,
    //MODULES
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: []
})
export class SharedModule { }
