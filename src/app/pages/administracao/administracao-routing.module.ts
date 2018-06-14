import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministracaoComponent } from './administracao.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form/usuario-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [{
    path: '',
    component: AdministracaoComponent,
    children: [
        {
            path: 'usuarios',
            component: UsuarioFormComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdministracaoRoutingModule {
}

export const routedComponents = [    
    UsuariosComponent,
    UsuarioFormComponent,
    AdministracaoComponent
]