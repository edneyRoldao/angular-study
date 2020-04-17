import { Component, Input } from '@angular/core';
import { ItemLista } from '../models/itemLista.model';

@Component({
  selector: 'lista-compras-item',
  templateUrl: 'lista-compras-item.component.html',
  styleUrls: ['lista-compras-item.component.css']
})
export class ListaComprasItemComponent {

  @Input()
  item: ItemLista;

}
