import { Archivo } from './Archivo';

export class EntregaTarea {
  id:number;
  usuarioId:string;
  nombreUsuario:string;
  apellidoUsuario:string;
  facultadId:number;
  contenedorTareaId:number;
  estado:string;
  calificacion:string;
  fechaEntrega:Date;
  nombreArchivo:string;
  extensionArchivo:string;
  ubicacionArchivo:string;
  archivoEntrega:Archivo;
}