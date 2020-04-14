import { Component } from '@angular/core';
import { Carro } from './carro.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  carro: Carro;

}
