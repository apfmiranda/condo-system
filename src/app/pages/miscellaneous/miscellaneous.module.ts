import { ConsultaCepService } from './service/consultaCep.service';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule, routedComponents } from './miscellaneous-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpModule } from '@angular/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  imports: [
    ThemeModule,
    MiscellaneousRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DlDateTimePickerDateModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    DlDateTimePickerDateModule
  ],
  declarations: [
    ...routedComponents,
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [FormsModule, ConsultaCepService],
})
export class MiscellaneousModule {
}


