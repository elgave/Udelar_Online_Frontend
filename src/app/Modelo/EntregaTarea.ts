import { Archivo } from './Archivo';

export class EntregaTarea {
  id:number;
  usuarioId:string;
  facultadId:number;
  contenedorTareaId:number;
  estado:string;
  calificacion:string;
  fechaEntrega:Date;
  archivoEntrega:Archivo;
}