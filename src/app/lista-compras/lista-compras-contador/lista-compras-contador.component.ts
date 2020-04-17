import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-compras-contador',
  templateUrl: 'lista-compras-contador.component.html',
  styleUrls: ['lista-compras-contador.component.css']
})
export class ListaComprasContadorComponent {

  @Input()
  qtdItensListaCompras: number;

}
