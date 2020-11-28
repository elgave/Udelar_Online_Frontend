import { Archivo } from './Archivo';
import { ContenedorTarea } from './ContenedorTarea';
import { Comunicado } from './Comunicado';
import { EncuestaCurso } from './EncuestaCurso';
import { Calendario } from './Calendario';

export class Componente {
  id: number;
  seccionCursoId: number;
  nombre:string;
  tipo:string;
  indice:number;
  archivo:Archivo;
  texto:string;
  contenedorTarea:ContenedorTarea;
  Comunicado:Comunicado;
  encuestaId:number;
  cursoId:number;
  encuesta:EncuestaCurso;
  fechaCierre:Date;
}
