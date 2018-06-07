import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import { UnidadeService } from './../../../services/unidade.service';
import { Unidade } from '../../../models/unidade';

@Component({
  selector: 'condomino',
  templateUrl: './condomino.component.html',
  styleUrls: ['./condomino.component.scss']
})
export class CondominoComponent implements OnInit {

  formulario: FormGroup;
  dropDownPlato: any[];
  selectedView;

  constructor(
    private formBuilder: FormBuilder,
    private unidadeService: UnidadeService,
    private http: Http,
  ) {

  }


  ngOnInit() {
    this.getDropDownPlato();

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],

      contato: this.formBuilder.group({
        telefone: [null],
        interfone: [null],
        email: [null, [Validators.required, Validators.email]],
      }),

      endereco: this.formBuilder.group({
        unidade: [null, Validators.required],
        complemento: [null]
      })
    });

  }


  onSubmit() {
    this.verificaValidacoesForm(this.formulario);
    console.log('formulario submetido');
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });

  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  
  getDropDownPlato() {
    this.unidadeService.save;
    console.log("getDropDownPlato()");
    
    const arr: any[] = [...this.unidadeService.getData()];

    
    this.dropDownPlato  = arr;
    this.selectedView = this.dropDownPlato[0]
  }

}
