import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemLista } from '../models/itemLista.model';

@Component({
  selector: 'lista-compras-item',
  templateUrl: 'lista-compras-item.component.html',
  styleUrls: ['lista-compras-item.component.css']
})
export class ListaComprasItemComponent {

  @Input()
  item: ItemLista;

  @Output()
  remover: EventEmitter<number> = new EventEmitter();

  onRemove() {
    this.remover.emit(this.item.id);
  }

}
