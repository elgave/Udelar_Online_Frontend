import { Archivo } from './Archivo';
import { ContenedorTarea } from './ContenedorTarea';
import { Comunicado } from './Comunicado';

export class Componente {
  id: number;
  seccionCursoId: number;
  nombre:string;
  tipo:string;
  indice:number;
  archivo:Archivo;
  texto:string;
  ContenedorTarea:ContenedorTarea;
  Comunicado:Comunicado;
}