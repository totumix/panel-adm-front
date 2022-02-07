import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from 'src/app/core/models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class BaseFormRolesService {
  public baseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      _id: [null],
      name: ['', Validators.required],
      enabled: [true],
    })
  }

  public pathFormData(rol): void {
    return this.baseForm.patchValue({
      _id: rol?._id,
      name: rol?.name,
      enabled: rol?.enabled,
    });
  }

  resetForm(rol?: Rol) {
    this.baseForm.reset(rol);
  }
}