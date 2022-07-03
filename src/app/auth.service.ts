import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public signup(email: string, password: string): Observable<AuthResponseData> {
    return this._http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrmK-cW2MHjMYUhPHGkCkH7fXlRvKFlKo", 
      {
        email: email, 
        password: password, 
        returnSecureToken: true
      });
  }
}
