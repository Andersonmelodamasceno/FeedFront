

// feed.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'https://localhost:7253/api/Feed'; // Substitua 'porta' pela porta do seu servidor

  constructor(private http: HttpClient) {}

  // Método para adicionar uma entidade de feed
  addFeed(feed: FeedService): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, feed);
  }

  // Método para obter uma entidade de feed por email
  pesquisarPorEmail(email: string): Observable<FeedService | null> {
    return this.http.get<FeedService>(`${this.apiUrl}/${email}`);
  }

  // Método para excluir uma entidade de feed por email
  deleteFeedByEmail(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${email}`);
  }
}
