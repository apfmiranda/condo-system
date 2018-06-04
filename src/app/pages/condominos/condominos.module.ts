import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, CondominosRoutingModule } from './condominos-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
import { AgmCoreModule } from '@agm/core';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UnidadeService } from './unidade/unidade.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

@NgModule({
  imports: [
    ThemeModule,
    CondominosRoutingModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTQz0YA-VkAXk-EdnvzfJtt7SIhmu-gsM',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot()
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [UnidadeService]
})
export class CondominosModule { 
}
