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

  // e1p2
  update(template: any) {
    console.log(template);
    this.nome = template.value;
  }

}
