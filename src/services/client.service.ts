import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.prod';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/clients/create`, client);
  }

  listClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/clients/list`);
  }
}