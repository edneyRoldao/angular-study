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

  carros: Carro[] = [
    {nome: 'i30', ano: 2010},
    {nome: 'bmw', ano: 2019},
    {nome: 'mercedes', ano: 2020},
    {nome: 'porche', ano: 2017},
    {nome: 'punto', ano: 2014}
  ];

}
