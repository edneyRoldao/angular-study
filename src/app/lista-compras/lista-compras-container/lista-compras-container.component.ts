import { Component } from '@angular/core';
import { ItemLista } from '../models/itemLista.model';

@Component({
  selector: 'lista-compras',
  templateUrl: 'lista-compras-container.component.html',
  styleUrls: [
    'lista-compras-container.component.css'
  ]
})
export class ListaComprasContainerComponent {

  lista: ItemLista[] = [
    {nome: 'macbook', categoria: 'ELETRONICOS', valor: 10.000},
    {nome: 'feijao', categoria: 'ALIMENTOS'},
    {nome: 'bananinha', categoria: 'ALIMENTOS'},
    {nome: 'vaio', categoria: 'ELETRONICOS', valor: 3.000},
    {nome: 'acucar', categoria: 'ALIMENTOS', valor: 1.5},
    {nome: 'arroz', categoria: 'ALIMENTOS', valor: 15.75}
  ];

}
