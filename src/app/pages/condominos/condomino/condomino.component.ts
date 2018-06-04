import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import { Unidade } from '../../../models/unidade';

@Component({
  selector: 'condomino',
  templateUrl: './condomino.component.html',
  styleUrls: ['./condomino.component.scss']
})
export class CondominoComponent implements OnInit {

  formulario: FormGroup;

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 8;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
  ) {}


  ngOnInit() {

    // this.dropDownService.getEstadosBR()
    //   .subscribe(dados => {
    //     this.estados = dados;
    //     console.log(dados);
    //   });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      
      contato:this.formBuilder.group({
        telefone: [null, Validators.required],
        email:    [null, [Validators.required, Validators.email]],
      }),

      endereco: this.formBuilder.group({
        plato:       [null],
        quadra:      [null, Validators.required],
        lote:        [null, Validators.required],
        complemento: [null]       
      })
    });

  }

  
  onSubmit() {
    // console.log(this.formulario);

      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    
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

  populaDadodForm(dados) {
    if (dados.erro) {
      this.resetar();
      alert("CEP não encontrado.");
      return;
    }

    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetarDadoForm() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
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

}
