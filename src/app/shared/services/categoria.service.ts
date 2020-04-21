import {Categoria} from '../models/categoria.model';

export class CategoriaService {

  constructor() {
  }

  categorias: Categoria[] = [
    {descricao: 'ELETRONICO'},
    {descricao: 'ALIMENTO'},
    {descricao: 'VESTUARIO'},
    {descricao: 'UTILIDADES'}
  ];

  getCategorias(): Categoria[] {
    return this.categorias;
  }

}
