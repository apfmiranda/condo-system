import { NgModule } from '@angular/core';
import { PortariaRoutingModule, routedComponents } from './portaria-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    PortariaRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class PortariaModule { }
