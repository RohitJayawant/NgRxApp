import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//ngrx
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';

//dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([]),
    StoreModule.forFeature('ngrx-app-store',reducers),
    EffectsModule.forFeature(effects),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
