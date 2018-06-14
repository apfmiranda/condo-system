import { UnidadeServiceModel } from './../unidade.service.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UnidadeService implements UnidadeServiceModel {

  private nextId: number;

  // data = [
  //   {id: 1, plato: 'Quarto de Milha', quadra: 'A', lote: '001'}, 
  //   {id: 2, plato: 'Quarto de Milha', quadra: 'A', lote: '002'}, 
  //   {id: 3, plato: 'Quarto de Milha', quadra: 'A', lote: '003'}, 
  //   {id: 4, plato: 'Apalusa', quadra: 'A', lote: '001'}
  // ];
  constructor() {
    let unidades = this.getData();

    if (unidades.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = unidades[unidades.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  save(unidade) {
    let unidades = this.getData();
    let indexUnidadeEdit = unidades.findIndex((obj => obj.id == unidade.id));
    unidades[indexUnidadeEdit] = unidade;

    this.seltLocalStorageUnidades(unidades);
  }

  delete(id) {
    let unidades = this.getData();
    unidades = unidades.filter((unidade) => unidade.id != id);
    this.seltLocalStorageUnidades(unidades);
  }

  create(unidade) {
    let unidades: any[] = this.getData()
    unidades.push(unidade);

    this.seltLocalStorageUnidades(unidades);
    this.nextId++;
  }

  getData() {
    let localStorageItem = JSON.parse(localStorage.getItem("unidades"))
    return localStorageItem == null ? [] : localStorageItem.data;
  }

  private seltLocalStorageUnidades(data: any[]): void {
    localStorage.setItem("unidades", JSON.stringify({ data: data }));
  }
}
