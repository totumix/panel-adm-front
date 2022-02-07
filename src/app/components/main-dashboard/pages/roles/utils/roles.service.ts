import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendService } from 'src/app/configs/backend.service';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private selectedRol = new Subject<any>();
  roleSelected = this.selectedRol.asObservable();

  constructor(private _backendService: BackendService) { }

  getRoles() {
    return this._backendService.get('roles/');
  }

  getRol(_id: string) {
    return this._backendService.get('role/' + _id);
  }

  selectRol(role) {
    this.selectedRol.next(role)
  }

  saveRol(role) {
    return this._backendService.post('role', role);
  }

  updateRol(role) {
    console.log("role2", role)
    return this._backendService.update('role', role._id, role);
  }

  deleteRol(_id: string) {
    return this._backendService.delete('role', _id);
  }

}
