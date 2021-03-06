import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClientService: HttpClient) { }
  getUserDetails(username: string,password: string){
      const data = {'username': username, 'password': password};
      // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      return this.httpClientService.post<any>('/login', data);
  }
}

