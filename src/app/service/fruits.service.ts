import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FruitInterface, CreateFruitInterface } from '../interface/fruits';

const _api = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private apiUrl = _api + 'fruits';

  constructor(private http: HttpClient) {}

  getFruits(): Observable<FruitInterface[]> {
    return this.http.get<FruitInterface[]>(this.apiUrl);
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
