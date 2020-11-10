import { Componente } from './Componente';

export class Seccion {
    id: number;
    titulo: string;
    cursoId :number;
    indice: number;
    componentes: Array<Componente>;
}