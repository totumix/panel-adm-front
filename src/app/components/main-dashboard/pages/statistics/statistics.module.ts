import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';

const routes: Routes = [
  { path: "", component: StatisticsTableComponent }
]

@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsTableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StatisticsModule { }
