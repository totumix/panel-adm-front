import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatSort } from '@angular/material/sort';
import { BackendService } from 'src/app/configs/backend.service';
import { AddCategoryDialogComponent } from '../../components/add-category/add-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import * as categoriesActions from '../../store/categories.actions';
import * as categoriesSelector from '../../store/categories.selector';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { BaseFormCategoriesService } from '../../utils/base-form-categories.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {

  public error;
  public categoriessMetadata;
  public loading = false;
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  categories$: Observable<Category[]>;
  categories: Category[];
  error$: Observable<any>;

  constructor(
    private _backendService: BackendService,
    private _route: ActivatedRoute,
    private store$: Store<AppState>,
    public dialog: MatDialog,
    public _categoryForm: BaseFormCategoriesService
  ) { }

  ngOnInit() {
    this.store$.dispatch(categoriesActions.loadRequestAction());
    this.store$.select(categoriesSelector.getCategories).subscribe(
      categories => {
        this.setDataTable(categories);
        this.categories$ = of(this.categories);
      }
    );
  }

  setDataTable(data) {
    console.log(data)
    this.dataSource = data;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  openCategoryDialog(category: Category = null): void {
    this.store$.dispatch(categoriesActions.setSelectedCategoryAction({ category }));
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(category => {
      if (category) {
        this.sendForm(category)
      }
    });
  }

  sendForm(category) {
    category._id ? this.store$.dispatch(categoriesActions.updateRequestAction(category)) :
      this.store$.dispatch(categoriesActions.saveRequestAction(category));
    this.error$ = this.store$.select(categoriesSelector.getCategoryError);
  }

  deleteCategory(category) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          contentText: `¿Seguro que quiere eliminar esta categoria?`
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.store$.dispatch(categoriesActions.deleteRequestAction(category))
        }
      });
  }

}
