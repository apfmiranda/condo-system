import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.scss']
})
export class UnidadeComponent implements OnInit {

  buttonsViews = [{
    title: 'Quarto de milha',
    key: 'quarto-milha',
  }, {
    title: 'Apalusa',
    key: 'apalusa',
  }];

  selectedView = this.buttonsViews[0];

  constructor() { }

  ngOnInit() {
  }

}
