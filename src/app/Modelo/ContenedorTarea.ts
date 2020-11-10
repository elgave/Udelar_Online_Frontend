import { EntregaTarea } from './EntregaTarea';

export class ContenedorTarea {
  id: number;
  componenteId: number;
  fechaCierre:Date;
  tareasEntregadas:Array<EntregaTarea>;
}