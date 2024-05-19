import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FruitInterface, CreateFruitInterface } from '../interface/fruits';

const _api = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private apiUrl = _api + 'fruits';

  constructor(private http: HttpClient) {}

  getFruits(page: number, limit: number): Observable<FruitInterface[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<FruitInterface[]>(this.apiUrl, { params });
  }

  searchFruits(query: string): Observable<FruitInterface[]> {
    let params = new HttpParams().set('name', query);
    return this.http.get<FruitInterface[]>(this.apiUrl, { params });
  }

  getDetailFruit(id: number): Observable<FruitInterface> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<FruitInterface>(url);
  }

  createFruit(req: CreateFruitInterface): Observable<CreateFruitInterface> {
    return this.http.post<CreateFruitInterface>(this.apiUrl, req);
  }

  updateFruit(
    id: string,
    req: CreateFruitInterface
  ): Observable<CreateFruitInterface> {
    return this.http.put<FruitInterface>(this.apiUrl + `/${id}`, req);
  }

  deleteFruit(id: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `/${id}`);
  }
}
