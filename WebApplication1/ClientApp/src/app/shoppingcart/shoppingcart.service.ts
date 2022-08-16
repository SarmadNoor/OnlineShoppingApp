import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(private http: HttpClient) { }

  addToCart(productId: number, userId: number): Promise<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`https://localhost:44358/ShoppingCart/AddtoCart`, { userId: userId, productId: productId }, { headers: header })
      .toPromise()
      .then(response => {
        return response;
      });
  }

  getItemsInCart(userId: number): Promise<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userID", userId.toString());
    return this.http.get('https://localhost:44358/ShoppingCart/GetItemsFromCart', { headers: header, params: queryParams })
      .toPromise()
      .then(response => {
        return response;
      })
  }

  sendMail(EmailAdd: number, emailSubject: string, emailBody:string): Promise<any> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`https://localhost:44358/Mail/SendMail`, { ToEmail: EmailAdd, Subject: emailSubject, Body: emailBody, Attachments: null }, { headers: header })
      .toPromise()
      .then(response => {
        return response;
      });
  }

}
