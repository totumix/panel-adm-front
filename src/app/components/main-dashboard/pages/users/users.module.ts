import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { BaseFormUserService } from './utils/base-form-user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './store/users.effects';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducer';
import { UsersTableComponent } from './pages/users-table/users-table.component';

const routes: Routes = [
  {
    path: "", component: UsersComponent, children: [
      { path: "", component: UsersTableComponent },
      { path: "user", component: AddUserComponent },
      { path: "user/:_id", component: AddUserComponent },
    ]
  }
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
    StoreModule.forFeature('usersStore', usersReducer),
    EffectsModule.forFeature([UserStoreEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [
    BaseFormUserService,
    UserStoreEffects
  ]
})
export class UsersModule { }
