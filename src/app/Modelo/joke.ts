export class Joke {
    private pregunta: String;
    private respuesta: String;

    constructor(pregunta: String, respuesta: String) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    getPregunta() {
        return this.pregunta;
    }

    getRespuesta() {
        return this.respuesta;
    }

    setPregunta(pregunta: String) {
        this.pregunta = pregunta;
    }

    setRespuesta(respuesta: String) {
        this.respuesta = respuesta;
    }
}