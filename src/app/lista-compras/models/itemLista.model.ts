import { Categoria } from '../../shared/models/categoria.model';

export interface ItemLista {
  id: number;
  nome: string;
  categoria?: Categoria;
  valor?: number;
}
