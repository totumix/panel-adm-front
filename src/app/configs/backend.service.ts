import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contentHeaders } from './headers';
import { environment } from 'src/app/configs/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {
  url: string;
  public identity;
  public token;
  public authenticationHeaders;
  constructor(private _http: HttpClient) {
    this.authenticationHeaders = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', this.getToken());
  }

  post(path, params, extraParams?): Observable<any> {
    this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
    return this._http.post(this.url, params, { headers: contentHeaders })
  }

  get(path, params?): Observable<any> {
    this.url = `${environment.serverUrl}${path}`;
    return this._http.get(this.url , { headers: this.authenticationHeaders })
  }

  delete(path, id): Observable<any> {
    this.url = `${environment.serverUrl}${path}/${id}`;
    return this._http
      .delete(this.url, { headers: this.authenticationHeaders });

  }

  handleError(error: any) {
    console.error('An error occurred', error);
    var httpErrorResponse = <any>error;
    return httpErrorResponse;
  }


  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    (identity != 'undefined') ? this.identity = identity : this.identity = null;
    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token');
    (token != 'undefined') ? this.token = token : this.token = null;
    return this.token;
  }

  //SERVICIOS QUE NECESITAN TOKEN DE AUTENTICACION

  getAuth(path): Observable<any> {
    this.url = `${environment.serverUrl}${path}`;
    const options = { headers: this.authenticationHeaders };
    return this._http.get(this.url, options)
  }


  /*get(path, params): Promise<any> {
    const options = { headers: contentHeaders, withCredentials: true, params: params };
    return this.http
      .get(`${environment.serverUrl}${path}`, options)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }*/

  /*
    post(path, params, extraParams?): Promise<any> {
      this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
      return this.http
        .post(this.url, params, { headers: contentHeaders, withCredentials: true })
        .toPromise()
        .then(response => {
          return response;
        })
        .catch(this.handleError);
    }
    patch(path, params, extraParams?): Promise<any> {
      this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
      return this.http
        .patch(this.url, params, { headers: contentHeaders, withCredentials: true })
        .toPromise()
        .then(response => {
          return response;
        })
        .catch(this.handleError);
    }
  
    put(path, params, extraParams?): Promise<any> {
      this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
      return this.http
        .put(this.url, params, { headers: contentHeaders, withCredentials: true })
        .toPromise()
        .then(response => {
          return response;
        })
        .catch(this.handleError);
    }
    */





}
