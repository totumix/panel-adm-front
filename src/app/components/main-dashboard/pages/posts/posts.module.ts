import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTableComponent } from './components/post-table/post-table.component';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
  { path: "", component: PostTableComponent }
]

@NgModule({
  declarations: [
    PostTableComponent,
    PostsComponent,
    AddPostComponent
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
export class PostsModule { }
