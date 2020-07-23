import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private REST_API_SERVER = "http://localhost:8080";

  constructor(public http: HttpClient) { }

  public loginRequest(user: any){
    return this.http.post<any>(this.REST_API_SERVER + "/login", user, {observe:'response'})
  }

  saveToken(jwt){
    console.log('----------------=========--'+jwt)
    localStorage.setItem('token', jwt.accessToken)
    localStorage.setItem('authorities', jwt.authorities[0].authority)
    localStorage.setItem('username', jwt.username)
  }
}
