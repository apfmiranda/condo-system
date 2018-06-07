import { UnidadeService } from './../../services/unidade.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, CondominosRoutingModule } from './condominos-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
import { AgmCoreModule } from '@agm/core';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

@NgModule({
  imports: [
    ThemeModule,    
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot(),
    MiscellaneousModule,
    Ng2SmartTableModule,
    CondominosRoutingModule
  ],
  //exports: [Ng2SmartTableModule],
  declarations: [
    ...routedComponents
  ],
  providers: [UnidadeService]
})
export class CondominosModule { 
}
