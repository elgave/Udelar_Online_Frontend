import { Usuario } from './Usuario';
import { Seccion } from './Seccion';

export class Curso {
    id: number;
    nombre: string;
    cantCreditos:number;
    facultadId: number;
    confirmaBedelia: boolean;
    usuarios: Array<Usuario>;
    docentes: Array<Usuario>;
    secciones: Array<Seccion>;
}