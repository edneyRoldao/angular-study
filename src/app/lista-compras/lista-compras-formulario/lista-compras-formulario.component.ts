import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ItemLista} from '../models/itemLista.model';
import {Categoria} from '../../shared/models/categoria.model';

@Component({
  selector: 'lista-compras-formulario',
  templateUrl: 'lista-compras-formulario.component.html',
  styleUrls: ['lista-compras-formulario.component.css']
})
export class ListaComprasFormularioComponent implements OnInit {

  itemList: ItemLista;

  @Output()
  itemEmitter: EventEmitter<ItemLista> =  new EventEmitter<ItemLista>();

  ngOnInit(): void {

    const categoria: Categoria = {
      descricao: 'Selecione a categoria'
    };

    this.itemList = {id: 0, nome: '', valor: 0, categoria};
  }

  onSubmit() {
    this.itemEmitter.emit(this.itemList);
  }

}
