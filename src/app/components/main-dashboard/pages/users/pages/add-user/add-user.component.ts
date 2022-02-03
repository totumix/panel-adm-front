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
  roles: Array<string>
  constructor(
    public userForm: BaseFormUserService,
    private store$: Store<AppState>,
    private _userService: UsersService
  ) { }

  ngOnInit() {
    this.dataInit();
  }

  dataInit = async () => {
    await this._userService.getRoles().subscribe(res => {
      let { roles } = res;
      this.roles = roles;
      console.log(this.roles, "entra")
    })
  }

  sendForm() {
    const user = this.userForm.baseForm.value;
    this.store$.dispatch(usersActions.saveRequestAction(user));
    this.error$ = this.store$.select(usersSelector.getUserError);
  }
}

