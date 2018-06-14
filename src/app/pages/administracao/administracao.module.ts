import { MiscellaneousModule } from './../miscellaneous/miscellaneous.module';
import { NgModule } from '@angular/core';
import { routedComponents, AdministracaoRoutingModule } from './administracao-routing.module';
import { ThemeModule } from './../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    AdministracaoRoutingModule,
    MiscellaneousModule
  ],
  declarations: [
    ...routedComponents    
  ]
})
export class AdministracaoModule { }
