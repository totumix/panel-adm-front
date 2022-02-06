import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesTableComponent } from './pages/categories-table/categories-table.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryDialogComponent } from './components/add-category/add-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { categoriesReducer } from './store/categories.reducer';
import { CategoryStoreEffects } from './store/categories.effects';

const routes: Routes = [
  { path: "", component: CategoriesTableComponent }
]

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesTableComponent,
    AddCategoryDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StoreModule.forFeature('categoriesStore', categoriesReducer),
    EffectsModule.forFeature([CategoryStoreEffects]),
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddCategoryDialogComponent
  ]
})
export class CategoriesModule { }
