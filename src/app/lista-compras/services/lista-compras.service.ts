import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ItemLista} from '../models/itemLista.model';

@Injectable()
export class ListaComprasService {

  urlBase = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<ItemLista[]> {
    return this.http.get<ItemLista[]>(`${this.urlBase}/listar`);
  }

  inserirItem(item: ItemLista): Observable<string> {
    return this.http.post<string>(`${this.urlBase}/inserir`, item);
  }

  atualizarItem(item: ItemLista): Observable<string> {
    return this.http.put<string>(`${this.urlBase}/atualizar`, item);
  }

  removerItem(id: number): Observable<string> {
    const url = `${this.urlBase}/deletar/${id}`;
    return this.http.delete<string>(url);
  }

  obterItem(id: number): Observable<ItemLista> {
    const url = `${this.urlBase}/listar/${id}`;
    return this.http.get<ItemLista>(url);
  }

}
