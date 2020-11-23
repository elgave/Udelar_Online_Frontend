import { Respuesta } from './Respuesta';

export class Pregunta{
  id:number;
  texto: string;
  respuestas: Array<Respuesta>
}