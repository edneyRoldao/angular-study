import { ItemLista } from '../models/itemLista.model';

export class ListaComprasService {

  list: ItemLista[] = [
    {id: 1, nome: 'macbook', categoria: 'ELETRONICOS', valor: 10.000},
    {id: 2, nome: 'feijao', categoria: 'ALIMENTOS'},
    {id: 3, nome: 'bananinha', categoria: 'ALIMENTOS'},
    {id: 4, nome: 'vaio', categoria: 'ELETRONICOS', valor: 3.000},
    {id: 5, nome: 'acucar', categoria: 'ALIMENTOS', valor: 1.5},
    {id: 6, nome: 'arroz', categoria: 'ALIMENTOS', valor: 15.75}
  ];

  constructor() {
  }

  getListaCompras(): ItemLista[] {
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
