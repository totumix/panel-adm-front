import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesTableComponent } from './components/articles-table/articles-table.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: "", component: ArticlesTableComponent }
]

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesTableComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticlesModule { }
