import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(
    private http: HttpClient,
  ) { }

  userLogin(data: any) {
    return this.http.post<any>(APIURL.USER_LOGIN, data);
  }

  userSignup(data: any) {
    return this.http.post<any>(APIURL.USER_SIGNUP, data);
  }

  userReSignIn(data: any) {
    return this.http.post<any>(APIURL.USER_RESIGNIN, data);
  }

  getUserToken() {
    return sessionStorage.getItem('token');
  }

  getUserId() {
    return sessionStorage.getItem('userid');
  }

  getUserRole() {
    return sessionStorage.getItem('role');
  }

  getUserPayload() {
    const token = this.getUserToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  isLoggedOut() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
