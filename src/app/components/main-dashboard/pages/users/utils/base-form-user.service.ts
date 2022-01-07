import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class BaseFormUserService {
  public baseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      cel: ['', Validators.required],
      state: ['', Validators.required],
      photo: [''],
      facebook: [''],
      instagram: [''],
      twitter: [''],
      enabled: [false, Validators.required],
    })
  }

  public pathFormData(user): void {
    return this.baseForm.patchValue({
      _id: user?._id,
      name: user?.name,
      last_name: user?.last_name,
      email: user?.email,
      password: user?.password,
      role: user?.role,
      cel: user?.cel,
      state: user?.state,
      photo: user?.photo,
      facebook: user?.facebook,
      instagram: user?.instagram,
      twitter: user?.twitter,
      enabled: user?.enabled,
      creation_date: user?.creation_date
    });
  }

  resetForm(user?: IUser) {
    this.baseForm.reset(user);
  }
}