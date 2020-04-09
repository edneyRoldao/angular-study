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
  idade: number = 20;

  // e1p2
  updateIdade(idade: number) {
    this.idade = idade;
  }

}
