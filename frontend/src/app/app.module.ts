import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {BrowserModule} from '@angular/platform-browser';
import { TipoSuministroComponent } from './tipo-suministro/tipo-suministro.component';
import { TipoSuministroCreateComponent } from './tipo-suministro/tipo-suministro-create/tipo-suministro-create.component';
import { TipoSuministroIndexComponent } from './tipo-suministro/tipo-suministro-index/tipo-suministro-index.component';
import { TipoSuministroUpdateComponent } from './tipo-suministro/tipo-suministro-update/tipo-suministro-update.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
