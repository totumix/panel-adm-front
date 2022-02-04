import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  error$: Observable<any>;
  total$: Observable<any>;
  isLoading$: Observable<boolean>;
  roles: Rol[];
  selectedUser: User;
  userId: string;
  constructor(
    public userForm: BaseFormUserService,
    private store$: Store<AppState>,
    private _userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let _id = params.get('_id')
      if (_id)
        this.store$.dispatch(usersActions.loadUserRequestAction({ _id }))
      this.dataInit();
    })
  }

  dataInit = async () => {
    this.store$.select(usersSelector.getSelectedUser).subscribe(
      selectedUser => this.userForm.pathFormData(selectedUser)
    );
    this.store$.select(usersSelector.getRoles).subscribe(
      roles => roles ?
        this.roles = roles :
        this._userService.getRoles().subscribe(rolesMetadata => this.roles = rolesMetadata.roles)
    );
  }

  sendForm() {
    const user = this.userForm.baseForm.value;
    user._id ? this.store$.dispatch(usersActions.updateRequestAction(user)) :
      this.store$.dispatch(usersActions.saveRequestAction(user));
    this.error$ = this.store$.select(usersSelector.getUserError);
  }

  ngOnDestroy() {
    this.userForm.resetForm(new User);
    this.store$.dispatch(usersActions.unsetSelectedUserAction());
  }
}

