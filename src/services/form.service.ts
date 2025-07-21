
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class FormService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


getQuestions() {
  console.log('[FormService] Requisição iniciada: GET /questions/list');
  return this.http.get(`${this.baseUrl}/questions/list`).pipe(
    tap({
      next: (data) => console.log('[FormService] Resposta recebida:', data),
      error: (error) => console.error('[FormService] Erro na requisição:', error),
    })
  );
}

  cadastrarCliente(question: any) {
    return this.http.post(`${this.baseUrl}/questions/create`, question);
  }
}
