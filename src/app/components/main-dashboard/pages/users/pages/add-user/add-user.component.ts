import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/configs/backend.service';
import { SnackBarService } from 'src/app/configs/services/snack-bar.service';
import { BaseFormUserService } from '../../utils/base-form-user.service';
import { IUser } from 'src/app/core/models/user'
import { User } from 'src/app/core/models/user.model';
import * as usersActions from '../../store/users.actions';
import * as usersSelector from '../../store/users.selector'
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { Observable } from 'rxjs';
import { UsersService } from '../../utils/users.service';
import { Rol } from 'src/app/core/models/rol.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: IUser
  error$: Observable<any>;
  total$: Observable<any>;
  isLoading$: Observable<boolean>;
  roles: Rol[]
  constructor(
    public userForm: BaseFormUserService,
    private store$: Store<AppState>,
    private _userService: UsersService
  ) { }

  ngOnInit() {
    this.dataInit();
  }

  dataInit = async () => {
    this.store$.select(usersSelector.getRoles).subscribe(
      roles => roles ?
        this.roles = roles :
        this._userService.getRoles().subscribe(rolesMetadata => this.roles = rolesMetadata.roles)
    );
  }

  sendForm() {
    const user = this.userForm.baseForm.value;
    this.store$.dispatch(usersActions.saveRequestAction(user));
    this.error$ = this.store$.select(usersSelector.getUserError);
  }
}

