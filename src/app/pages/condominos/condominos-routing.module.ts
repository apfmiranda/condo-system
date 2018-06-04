import { CondominosComponent } from "./condominos.component";
import { CondominoComponent } from "./condomino/condomino.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapaCondominioComponent } from "./mapa-condominio/mapa-condominio.component";
import { UnidadeComponent } from "./unidade/unidade.component";
import { ListaUnidadeComponent } from "./unidade/lista-unidade/lista-unidade.component";

const routes: Routes = [{
    path: '',
    component: CondominosComponent,
    children: [
        {
          path: 'condomino',
          component: CondominoComponent,
        },
        {
          path: 'unidade',
          component: UnidadeComponent,
        },
        {
          path: 'mapa',
          component: MapaCondominioComponent
        }
        ,
        {
          path: 'lista',
          component: ListaUnidadeComponent
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CondominosRoutingModule {
}

export const routedComponents = [
    CondominosComponent,    
    UnidadeComponent,
    CondominoComponent,
    MapaCondominioComponent,
    ListaUnidadeComponent
    
]