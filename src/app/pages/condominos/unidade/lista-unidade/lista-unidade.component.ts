import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'lista-unidade',
  templateUrl: './lista-unidade.component.html',
  styleUrls: ['./lista-unidade.component.scss']
})
export class ListaUnidadeComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {title: 'ID',type: 'number', width: '10%'},
      plato: {
        title: 'Platô',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Quarto de Milha', title: 'Quarto de Milha' },{ value: 'Apalusa', title: 'Apalusa' }]
          }
        }
      },
      quadra: {title: 'Quadra', type: 'string', width: '10%'},
      lote: {title: 'Lote', type: 'string'},
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private unidadeService: UnidadeService) {
    const data = this.unidadeService.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Tem certeza que deseja apagar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
