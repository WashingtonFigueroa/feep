import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {OrganizacionComponent} from '../../organizacion/organizacion.component';
import {OrganizacionCreateComponent} from '../../organizacion/organizacion-create/organizacion-create.component';
import {OrganizacionUpdateComponent} from '../../organizacion/organizacion-update/organizacion-update.component';
import {OrganizacionIndexComponent} from '../../organizacion/organizacion-index/organizacion-index.component';
import {OrganizacionService} from '../../organizacion/organizacion.service';
import { MiembroComponent } from '../../miembro/miembro.component';
import { MiembroIndexComponent } from '../../miembro/miembro-index/miembro-index.component';
import { MiembroUpdateComponent } from '../../miembro/miembro-update/miembro-update.component';
import { MiembroCreateComponent } from '../../miembro/miembro-create/miembro-create.component';
import { EventoComponent } from '../../evento/evento.component';
import { EventoIndexComponent } from '../../evento/evento-index/evento-index.component';
import { EventoCreateComponent } from '../../evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from '../../evento/evento-update/evento-update.component';
import { TipoOrganizacionComponent } from '../../tipo-organizacion/tipo-organizacion.component';
import { TipoOrganizacionIndexComponent } from '../../tipo-organizacion/tipo-organizacion-index/tipo-organizacion-index.component';
import { TipoOrganizacionUpdateComponent } from '../../tipo-organizacion/tipo-organizacion-update/tipo-organizacion-update.component';
import { TipoOrganizacionCreateComponent } from '../../tipo-organizacion/tipo-organizacion-create/tipo-organizacion-create.component';
import { TipoPersonaComponent } from '../../tipo-persona/tipo-persona.component';
import { TipoPersonaIndexComponent } from '../../tipo-persona/tipo-persona-index/tipo-persona-index.component';
import { TipoPersonaCreateComponent } from '../../tipo-persona/tipo-persona-create/tipo-persona-create.component';
import { TipoPersonaUpdateComponent } from '../../tipo-persona/tipo-persona-update/tipo-persona-update.component';
import { TipoEventoComponent } from '../../tipo-evento/tipo-evento.component';
import { TipoEventoIndexComponent } from '../../tipo-evento/tipo-evento-index/tipo-evento-index.component';
import { TipoEventoUpdateComponent } from '../../tipo-evento/tipo-evento-update/tipo-evento-update.component';
import { TipoEventoCreateComponent } from '../../tipo-evento/tipo-evento-create/tipo-evento-create.component';
import {MiembroService} from '../../miembro/miembro.service';
import {EventoService} from '../../evento/evento.service';
import {TipoOrganizacionService} from '../../tipo-organizacion/tipo-organizacion.service';
import {TipoEventoService} from '../../tipo-evento/tipo-evento.service';
import {TipoPersonaService} from '../../tipo-persona/tipo-persona.service';
import {HttpClientModule} from '@angular/common/http';
import {TipoInsumoComponent} from '../../tipo-insumo/tipo-insumo.component';
import {TipoInsumoCreateComponent} from '../../tipo-insumo/tipo-insumo-create/tipo-insumo-create.component';
import {TipoInsumoUpdateComponent} from '../../tipo-insumo/tipo-insumo-update/tipo-insumo-update.component';
import {TipoInsumoIndexComponent} from '../../tipo-insumo/tipo-insumo-index/tipo-insumo-index.component';
import {TipoInsumoService} from '../../tipo-insumo/tipo-insumo.service';
import { UbicacionComponent } from '../../ubicacion/ubicacion.component';
import { UbicacionIndexComponent } from '../../ubicacion/ubicacion-index/ubicacion-index.component';
import { UbicacionUpdateComponent } from '../../ubicacion/ubicacion-update/ubicacion-update.component';
import { UbicacionCreateComponent } from '../../ubicacion/ubicacion-create/ubicacion-create.component';
import {UbicacionService} from "../../ubicacion/ubicacion.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    OrganizacionComponent,
    OrganizacionIndexComponent,
    OrganizacionCreateComponent,
    OrganizacionUpdateComponent,
    MiembroComponent,
    MiembroIndexComponent,
    MiembroUpdateComponent,
    MiembroCreateComponent,
    EventoComponent,
    EventoIndexComponent,
    EventoCreateComponent,
    EventoUpdateComponent,
    TipoOrganizacionComponent,
    TipoOrganizacionIndexComponent,
    TipoOrganizacionUpdateComponent,
    TipoOrganizacionCreateComponent,
    TipoPersonaComponent,
    TipoPersonaIndexComponent,
    TipoPersonaCreateComponent,
    TipoPersonaUpdateComponent,
    TipoEventoComponent,
    TipoEventoIndexComponent,
    TipoEventoUpdateComponent,
    TipoEventoCreateComponent,
    TipoInsumoComponent,
    TipoInsumoCreateComponent,
    TipoInsumoUpdateComponent,
    TipoInsumoIndexComponent,
      UbicacionComponent,
      UbicacionIndexComponent,
      UbicacionUpdateComponent,
      UbicacionCreateComponent,
  ],
  providers: [
      OrganizacionService,
      MiembroService,
      EventoService,
      TipoOrganizacionService,
      TipoEventoService,
      TipoPersonaService,
      TipoInsumoService,
      UbicacionService
  ]
})

export class AdminLayoutModule {}
