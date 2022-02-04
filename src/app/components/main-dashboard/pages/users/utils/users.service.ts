import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendService } from 'src/app/configs/backend.service';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private selectedUser = new Subject<any>();
  userSelected = this.selectedUser.asObservable();

  constructor(private _backendService: BackendService) { }

  getUsers() {
    return this._backendService.get('users/');
  }

  getUser(id: number) {
    return this._backendService.get('users/' + id);
  }

  getRoles() {
    return this._backendService.get('roles/');
  }

  selectBook(user) {
    this.selectedUser.next(user)
  }

  saveUser(user) {
    return this._backendService.post('register', user);
  }

  updateUser(user) {
    return this._backendService.post('http://localhost/BookLoan.Catalog.API/api/Book/Edit/' + user.id, user);
  }

  deleteUser(_id: string) {
    return this._backendService.delete('user', _id);
  }

}
