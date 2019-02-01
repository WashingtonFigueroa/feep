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
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { OrganizacionIndexComponent } from './organizacion/organizacion-index/organizacion-index.component';
import { OrganizacionCreateComponent } from './organizacion/organizacion-create/organizacion-create.component';
import { OrganizacionUpdateComponent } from './organizacion/organizacion-update/organizacion-update.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OrganizacionComponent,
    OrganizacionIndexComponent,
    OrganizacionCreateComponent,
    OrganizacionUpdateComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
