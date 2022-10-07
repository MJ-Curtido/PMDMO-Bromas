import { Component } from '@angular/core';
import { Joke } from "../Modelo/joke";
import { Servicio } from '../Modelo/servicio';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent {
  bromas: Joke[];

  constructor() {
    var serv = new Servicio();
    this.bromas = serv.getListaBromas();
  }

  mostrarRespuesta(broma:Joke) {
    broma.setEscondido();
  }
}
