import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { BaseFormCategoriesService } from '../../utils/base-form-categories.service';
import * as categoriesActions from '../../store/categories.actions';
import * as categoriesSelector from '../../store/categories.selector';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _categoryForm: BaseFormCategoriesService,
    private store$: Store<AppState>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.store$.select(categoriesSelector.getSelectedCategory).subscribe(
      selectedCategory => this._categoryForm.pathFormData(selectedCategory)
    );
  }

  ok() {
    this.dialogRef.close(this._categoryForm.baseForm.value);
  }

  ngOnDestroy() {
    this._categoryForm.resetForm(new Category)
    this.store$.dispatch(categoriesActions.unsetSelectedCategoryAction());
  }
}
