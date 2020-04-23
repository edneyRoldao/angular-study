import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ListaComprasService {

  urlBase = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<any> {
    return this.http.get<any>(`${this.urlBase}/listar`);
  }

}
