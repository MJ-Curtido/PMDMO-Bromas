import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';
import { Servicio } from 'src/app/Modelo/servicio';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  anadirPregunta(pregunta:HTMLInputElement, respuesta:HTMLInputElement) {
    if (pregunta.value === '' || respuesta.value === '') {
      var serv = new Servicio();

      serv.anadirBroma(new Joke(pregunta.value, respuesta.value));
    }
    else {
      //Hacer que se abra un modal
    }
    pregunta.value = '';
    respuesta.value = '';
  }
}
