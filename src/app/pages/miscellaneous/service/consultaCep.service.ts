import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ConsultaCepService {

    constructor(private http: Http) { }

    consultaCEP(cep: string): Observable<any> {

        // Nova variável "cep" somente com dígitos.
        cep = cep.replace(/\D/g, '');

        // Verifica se campo cep possui valor informado.
        if (cep !== '') {

            // Expressão regular para validar o CEP.
            const validacep = /^[0-9]{8}$/;
            // Valida o formato do CEP.
            if (validacep.test(cep)) {
                return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
                    .map(dados => dados.json());

            } else {
                // cep é inválido.
                return null;
            }
        }
        else {
             // cep vazio.
            return null;
        }

    }
}


