import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userId: string, password: string): Promise<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`https://localhost:44358/Login/login`, { userId: userId, password: password }, { headers: header })
      .toPromise()
      .then(response => {
        return response;
      });
  }
  
}
