import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { BaseFormUserService } from './utils/base-form-user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './users.effects';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users.reducer';

const routes: Routes = [
  { path: "", component: UsersTableComponent },
  { path: "add-user", component: AddUserComponent }

]

@NgModule({
  declarations: [
    UsersTableComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StoreModule.forFeature('userStore', usersReducer),
    EffectsModule.forRoot([UserStoreEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [
    BaseFormUserService,
    UserStoreEffects
  ]
})
export class UsersModule { }
