import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getProducts(): Promise<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`https://localhost:44358/Dashboard/GetProducts`, { headers: header })
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
