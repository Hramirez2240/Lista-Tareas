export class Tareas{

    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime() //Representacion de los minutos y segundos
        this.completado = false;
        this.creacion = new Date();
    }
}