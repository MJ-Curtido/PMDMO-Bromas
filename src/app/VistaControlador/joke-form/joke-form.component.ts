import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {
  @Output() enviarBroma = new EventEmitter<Joke>();

  anadirPregunta(pregunta:HTMLInputElement, respuesta:HTMLInputElement) {
    if (pregunta.value !== '' && respuesta.value !== '') {
      this.enviarBroma.emit(new Joke(pregunta.value, respuesta.value));
    }
    else {
      //Hacer que se abra un modal
    }
    pregunta.value = '';
    respuesta.value = '';
  }
}
