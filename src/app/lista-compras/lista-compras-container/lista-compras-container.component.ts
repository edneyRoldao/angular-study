import {Component, OnInit} from '@angular/core';
import { ItemLista } from '../models/itemLista.model';
import { ListaComprasService } from '../services/lista-compras.service';

@Component({
  selector: 'lista-compras',
  templateUrl: 'lista-compras-container.component.html',
  styleUrls: [
    'lista-compras-container.component.css'
  ],

  // esse cara pode ficar no modulo, assim ele fica acessível por todos os componentes do mesmo
  providers: [ ListaComprasService ]
})
export class ListaComprasContainerComponent implements OnInit {

  lista: ItemLista[];

  constructor(private listaComprasService: ListaComprasService) {
  }

  ngOnInit(): void {
    this.lista = this.listaComprasService.getListaCompras();
  }

  onRemoveHandler(itemId: number) {
    this.lista = this.listaComprasService.removerItem(itemId);
  }

}
