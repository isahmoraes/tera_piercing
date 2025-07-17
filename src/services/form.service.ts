
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/enviroment.prod';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(`${this.baseUrl}/questions/list`);
  }

  cadastrarCliente(question: any) {
    return this.http.post(`${this.baseUrl}/questions/create`, question);
  }
}
