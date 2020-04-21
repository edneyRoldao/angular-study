import { ItemLista } from '../models/itemLista.model';
import {CategoriaService} from '../../shared/services/categoria.service';
import {Categoria} from '../../shared/models/categoria.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ListaComprasService {

  list: ItemLista[] = [
    {id: 1, nome: 'macbook' , valor: 10.000},
    {id: 2, nome: 'feijao'},
    {id: 3, nome: 'bananinha'},
    {id: 4, nome: 'vaio', valor: 3.000},
    {id: 5, nome: 'acucar', valor: 1.5},
    {id: 6, nome: 'arroz', valor: 15.75}
  ];

  constructor(private categoriaService: CategoriaService) {
  }

  getListaCompras(): ItemLista[] {
    const categorias: Categoria[] = this.categoriaService.getCategorias();

    this.list = this.list.map(item => {
      item.categoria = categorias[0];
      return item;
    });

    return this.list;
  }

  removerItem(id: number): ItemLista[] {
    this.list = this.list.filter(item => item.id !== id);
    return this.list;
  }

  // todo - precisa implementar
  getItemLista(id: number): ItemLista {
    return null;
  }

  // todo - precisa implementar
  addItemLista(item: ItemLista): ItemLista {
    return null;
  }

  // todo - precisa implementar
  getListaFilter(descricao: string): ItemLista[] {
    return [];
  }

}
