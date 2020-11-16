import {Pregunta} from 'src/app/Modelo/Pregunta'

export class Encuesta{
    constructor(
    public titulo: string,
    public creadaPor: string,
    public preguntas: Array<Pregunta>
    ){}

}