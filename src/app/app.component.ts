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
  dtNascimento = new Date();

  frutas = ['banana', 'pera', 'maca', 'laranja'];

  // e1p4 f (ver data no console)
  verData() {
    console.log(this.dtNascimento);
  }

}
