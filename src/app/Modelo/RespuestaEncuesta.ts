import { Respuesta } from './Respuesta';

export class RespuestaEncuesta{
    encuestaId: number;
    cedula: string;
    facultadId: number;
    respuestas: Array<Respuesta>;
}