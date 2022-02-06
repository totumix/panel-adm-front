import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { IUser } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class BaseFormCategoriesService {
  public baseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      _id: [null],
      name: ['', Validators.required],
      enabled: [true],
    })
  }

  public pathFormData(category): void {
    return this.baseForm.patchValue({
      _id: category?._id,
      name: category?.name,
      enabled: category?.enabled,
    });
  }

  resetForm(category?: Category) {
    this.baseForm.reset(category);
  }
}