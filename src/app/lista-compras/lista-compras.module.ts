import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ListaComprasContainerComponent } from './lista-compras-container/lista-compras-container.component'
import { ListaComprasContadorComponent } from './lista-compras-contador/lista-compras-contador.component';
import { ListaComprasListagemComponent } from './lista-compras-listagem/lista-compras-listagem.component';

@NgModule({
  declarations: [
    ListaComprasContainerComponent,
    ListaComprasContadorComponent,
    ListaComprasListagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaComprasContainerComponent
  ]
})
export class ListaComprasModule {

}
