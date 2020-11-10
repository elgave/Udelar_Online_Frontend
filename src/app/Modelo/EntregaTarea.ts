import { Archivo } from './Archivo';

export class EntregaTarea {
  id:number;
  usuarioId:string;
  facultadId:number;
  calificacion:string;
  fechaEntrega:Date;
  archivoEntrega:Archivo;
}