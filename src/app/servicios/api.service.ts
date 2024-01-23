import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarritoDePagoComponent } from '../carrito-de-pago/carrito-de-pago.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "https://api.mercadopago.com/users/test"
  
  constructor(private _httpClient: HttpClient) { }
  public getCarritoDePago(): Observable<CarritoDePagoComponent>{
    return this._httpClient.get<CarritoDePagoComponent>(this.baseURL);
  }
}
