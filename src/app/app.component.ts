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
  nome: string = 'ricardo jonas';

  //e2p1
  email = 'ricardo@mail.com';

  // e3p1
  sobrenome = 'jonas';

  // e1p2
  atualizar(event: any) {
    this.nome = event.target.value;
  }

  // e2p2
  handleUpdate(value: any) {
    this.email = value;
  }

}
