import { Component, OnInit } from '@angular/core';
import { Carro } from './carro.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit { // e1p2

  // e1p1
  carro: Carro;

  // e1p3 (esse metodo e executado antes na inicializacao do componente)
  ngOnInit() {

    console.log('iniciando componente');
    this.carro = { nome: 'passate', ano: 1985 }

  }

}
