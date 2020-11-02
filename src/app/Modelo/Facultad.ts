import { Curso } from './Curso';
import { Usuario } from './Usuario';

export class Facultad {
    id: number;
    nombre: string;
    cursos: Array<Curso>;
    url: string;
    color: string;
    icono: string;
    usuarios: Array<Usuario>;
}

