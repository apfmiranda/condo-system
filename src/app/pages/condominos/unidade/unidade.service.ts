import { Injectable } from '@angular/core';

@Injectable()
export class UnidadeService {
 
  data = [
    {id: 1, plato: 'Quarto de Milha', quadra: 'A', lote: '001'}, 
    {id: 2, plato: 'Quarto de Milha', quadra: 'A', lote: '002'}, 
    {id: 3, plato: 'Quarto de Milha', quadra: 'A', lote: '003'}, 
    {id: 4, plato: 'Apalusa', quadra: 'A', lote: '001'}
  ];

  getData(){
    return this.data;
  }
}
