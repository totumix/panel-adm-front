import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { BaseFormRolesService } from '../../utils/base-form-roles.service';
import * as rolesActions from '../../store/rol.actions';
import * as rolesSelector from '../../store/rol.selector';
import { Rol } from 'src/app/core/models/rol.model';
@Component({
  selector: 'app-add-role-dialog',
  templateUrl: './add-role-dialog.component.html',
  styleUrls: ['./add-role-dialog.component.scss']
})
export class AddRoleDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _rolForm: BaseFormRolesService,
    private store$: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store$.select(rolesSelector.getSelectedRol).subscribe(
      selectedRol => this._rolForm.pathFormData(selectedRol)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ok() {
    this.dialogRef.close(this._rolForm.baseForm.value);
  }

  ngOnDestroy() {
    this._rolForm.resetForm(new Rol)
    this.store$.dispatch(rolesActions.unsetSelectedRolAction());
  }

}
