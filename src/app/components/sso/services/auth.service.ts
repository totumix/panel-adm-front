import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../../configs/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _backendService: BackendService,
    private _router: Router) { }

  public login(path, params, gettoken = null) {
    if (gettoken != null) {
      params.gettoken = gettoken;
    }
    return this._backendService.post(path, params)
  }

  public logout(): void {
    localStorage.clear();
    this._router.navigate(['/sso/login'])
  }

}
