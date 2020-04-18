import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemLista } from '../models/itemLista.model';

@Component({
  selector: 'lista-compras-item',
  templateUrl: 'lista-compras-item.component.html',
  styleUrls: ['lista-compras-item.component.css']
})
export class ListaComprasItemComponent {

  @Input()
  item: ItemLista; // nao esquecer de colocar o id no modelo

  // e1p1
  @Output()
  remover: EventEmitter<number> = new EventEmitter();

  // e1p2
  onRemove() {
    this.remover.emit(this.item.id);
  }

}
