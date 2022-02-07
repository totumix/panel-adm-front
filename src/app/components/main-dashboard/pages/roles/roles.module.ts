import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { RolesTableComponent } from './pages/roles-table/roles-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rolesReducer } from './store/rol.reducer';
import { RolStoreEffects } from './store/rol.effects';
import { AddRoleDialogComponent } from './components/add-role-dialog/add-role-dialog.component';

const routes: Routes = [
  {
    path: "", component: RolesComponent, children: [
      { path: "", component: RolesTableComponent },
    ]
  }
]

@NgModule({
  declarations: [
    RolesComponent,
    RolesTableComponent,
    AddRoleDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StoreModule.forFeature('rolesStore', rolesReducer),
    EffectsModule.forFeature([RolStoreEffects]),
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddRoleDialogComponent
  ]
})
export class RolesModule { }
