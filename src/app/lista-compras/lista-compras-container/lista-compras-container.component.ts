import {Component, OnInit} from '@angular/core';
import { ItemLista } from '../models/itemLista.model';
import { ListaComprasService } from '../services/lista-compras.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'lista-compras',
  templateUrl: 'lista-compras-container.component.html',
  styleUrls: [
    'lista-compras-container.component.css'
  ]
})
export class ListaComprasContainerComponent implements OnInit {

  lista: ItemLista[];

  constructor(private listaComprasService: ListaComprasService) {
  }

  ngOnInit(): void {

    this.listaComprasService.listarTodos().subscribe(

      (data) => {
        console.log('aqui');
        this.lista = data;
      },

      (error) => {
        console.log('ocorreu um erro', error);
      }

    );

  }

  onRemoveHandler(itemId: number) {
  }

}
