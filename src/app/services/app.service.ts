import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MenuItem, Order, RestaurantListItem } from '../api-interfaces';
import { Observable } from 'rxjs';
import { ChatCompletion } from 'openai/resources';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<RestaurantListItem[]> {
    return this.http.get<RestaurantListItem[]>(
      `${environment.apiUrl}/restaurants/`
    );
  }

  getRestaurantById(id: number): Observable<RestaurantListItem> {
    return this.http.get<RestaurantListItem>(
      `${environment.apiUrl}/restaurants/${id}`
    );
  }

  getRestaurantMenu(
    id: number,
    category?: string,
    orderBy?: string
  ): Observable<MenuItem[]> {
    let params: { category?: string; orderBy?: string } = {};
    if (category) {
      params['category'] = category;
    }
    if (orderBy) {
      params['orderBy'] = orderBy;
    }
    return this.http.get<MenuItem[]>(
      `${environment.apiUrl}/restaurants/${id}/menu`,
      {
        params: params,
        responseType: 'json',
      }
    );
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.apiUrl}/orders/`, order, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
    });
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/orders/${id}`);
  }
}
