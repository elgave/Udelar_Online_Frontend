import { Usuario } from './Usuario';

export class Curso {
    id: number;
    nombre: string;
    cantCreditos:number;
    facultadId: number;
    usuarios: Array<Usuario>;
    docentes: Array<Usuario>;
}