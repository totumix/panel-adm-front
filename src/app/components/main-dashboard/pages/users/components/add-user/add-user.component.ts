import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/configs/backend.service';
import { SnackBarService } from 'src/app/configs/services/snack-bar.service';
import { BaseFormUserService } from '../../utils/base-form-user.service';
import { IUser } from 'src/app/core/models/user'
import { User } from 'src/app/core/models/user.model';
import { UsersService } from '../../utils/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: IUser

  constructor(
    public userForm: BaseFormUserService,
    private _backendService: BackendService,
    private snackbar: SnackBarService,
    private _userService: UsersService
  ) { }

  ngOnInit() {
   // this._userService.userStoreReset();
  }

  sendForm() {
    const user = this.userForm.baseForm.value;
    this._backendService.post('register', user).subscribe(
      res => {
        let { user, message } = res;
        //this._userService.userDispatch(user);
        this.snackbar.success(message);
        this.userForm.resetForm(new User);
      },
      err => {
        this._backendService.handleError(err)
      })
  }
}

