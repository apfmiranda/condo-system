import { ConsultaCepService } from './../../../../miscellaneous/service/consultaCep.service';
import { NgbDatePTParserFormatter } from './../../../../../i18n/NgbDatePTParserFormatter';
import { NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { I18n } from './../../../../../i18n/i18n';
import { CustomDatepickerI18n } from './../../../../../i18n/custom-datepicker-i18n';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  providers: [
    [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}], // define custom NgbDatepickerI18n provider
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}]
  ]
})  

export class UsuarioFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consulataCepService: ConsultaCepService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      dataNascimento:[null],
      cpf:[null],
      // contato: this.formBuilder.group({
       
        
      // }),

      endereco: this.formBuilder.group({
        cep: [null],
        estado: [null],
        cidade: [null, Validators.required],
        bairro: [null], 
        rua: [null],
        numero: [null],
        complemento: [null]
      })
    });
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

  consultaCEP(){    
    this.consulataCepService.consultaCEP(this.formulario.get('endereco.cep').value)      
      .subscribe(dados => {
        if (dados != null){
          this.populaFormComEndereco(dados);
        }                
      });                    
  } 

  populaFormComEndereco(dados){
    this.formulario.patchValue({
      endereco:{
        cep: dados.cep,
        cidade: dados.localidade,        
        estado: dados.uf,
        bairro: dados.bairro,
        rua: dados.logradouro,        
        complemento: dados.complemento
      }     
    })
  }


}