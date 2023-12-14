import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getDadosPorEmail(email: string): Observable<any> {
    const url = `https://localhost:7253/api/Feed`; // Substitua pela URL da sua API e o parâmetro de busca pelo email
    return this.http.get<any>(url);
  }
}
