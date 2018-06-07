import { NbAuthModule, NbDummyAuthProvider, NB_AUTH_TOKEN_CLASS, NbAuthJWTToken } from '@nebular/auth';
import { AuthGuard } from './guards/auth-guard.service';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),    
    NbAuthModule.forRoot({
      providers: {
        email: {          
          service: NbDummyAuthProvider,
          config: {
            alwaysFail: false,
            data: {
              token: 'some-jwt-token'
            },
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },
      },
    }), 
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
  ],
})
export class AppModule {
}
