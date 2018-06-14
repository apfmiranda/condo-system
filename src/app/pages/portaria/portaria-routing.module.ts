import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortariaComponent } from './portaria.component';
import { VisitanteComponent } from './visitante/visitante.component';

const routes: Routes = [{
    path: '',
    component: PortariaComponent,
    children: [
        {
            path: 'visitante',
            component: VisitanteComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PortariaRoutingModule {
}

export const routedComponents = [
    PortariaComponent,
    VisitanteComponent
];