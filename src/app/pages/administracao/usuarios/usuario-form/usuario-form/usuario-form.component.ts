import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { I18n } from './../../../../../i18n/i18n';
import { CustomDatepickerI18n } from './../../../../../i18n/custom-datepicker-i18n';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider
})
export class UsuarioFormComponent implements OnInit {

  formulario: FormGroup;
  model;

  constructor(
    private formBuilder: FormBuilder,
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
        cidade: [null, Validators.required],
        estado: [null],
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

}
