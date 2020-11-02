import { Curso } from './Curso';
import { Rol } from './Rol';

export class Usuario {
    cedula: string;
    facultadId: number;
    nombre:string;
    apellido:string;
    correo:string;
    contrasena:string;
    cursos: Curso[];
    roles: Rol[];
}