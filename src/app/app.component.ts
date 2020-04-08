import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  // e1p1
  onClickEvent() {
    alert('botao pressionado');
  }

  // e2p1
  passaMao() {
    console.log('passou a mao aqui');
  }

  tiraMao(event: any) {
    console.log('tirou a mao aqui', event);
  }

}
