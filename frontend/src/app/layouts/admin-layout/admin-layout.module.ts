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
import { OrganizacionComponent } from '../../organizacion/organizacion.component';
import { OrganizacionCreateComponent } from '../../organizacion/organizacion-create/organizacion-create.component';
import { OrganizacionUpdateComponent } from '../../organizacion/organizacion-update/organizacion-update.component';
import { OrganizacionIndexComponent } from '../../organizacion/organizacion-index/organizacion-index.component';
import { OrganizacionService } from '../../organizacion/organizacion.service';
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
<<<<<<< HEAD
import {UbicacionService} from "../../ubicacion/ubicacion.service";
import { InscripcionComponent } from '../../inscripcion/inscripcion.component';
import { InscripcionIndexComponent } from '../../inscripcion/inscripcion-index/inscripcion-index.component';
import { InscripcionUpdateComponent } from '../../inscripcion/inscripcion-update/inscripcion-update.component';
import { InscripcionCreateComponent } from '../../inscripcion/inscripcion-create/inscripcion-create.component';
import { OrganizadorComponent } from '../../organizador/organizador.component';
import { OrganizadorIndexComponent } from '../../organizador/organizador-index/organizador-index.component';
import { OrganizadorUpdateComponent } from '../../organizador/organizador-update/organizador-update.component';
import { OrganizadorCreateComponent } from '../../organizador/organizador-create/organizador-create.component';
import {InscripcionService} from "../../inscripcion/inscripcion.service";
=======
import {UbicacionService} from '../../ubicacion/ubicacion.service';
import {InsumoContainerComponent} from '../../insumo-container/insumo-container.component';
import {SuministroComponent} from '../../suministro/suministro.component';
import {SuministroCreateComponent} from '../../suministro/suministro-create/suministro-create.component';
import {SuministroIndexComponent} from '../../suministro/suministro-index/suministro-index.component';
import {SuministroUpdateComponent} from '../../suministro/suministro-update/suministro-update.component';
import {SuministroService} from '../../suministro/suministro.service';
import {TipoSuministroComponent} from '../../tipo-suministro/tipo-suministro.component';
import {TipoSuministroCreateComponent} from '../../tipo-suministro/tipo-suministro-create/tipo-suministro-create.component';
import {TipoSuministroIndexComponent} from '../../tipo-suministro/tipo-suministro-index/tipo-suministro-index.component';
import {TipoSuministroUpdateComponent} from '../../tipo-suministro/tipo-suministro-update/tipo-suministro-update.component';
import {TipoSuministroService} from '../../tipo-suministro/tipo-suministro.service';
import {TipoComponent} from '../../tipo/tipo.component';
import {TipoCreateComponent} from '../../tipo/tipo-create/tipo-create.component';
import {TipoIndexComponent} from '../../tipo/tipo-index/tipo-index.component';
import {TipoUpdateComponent} from '../../tipo/tipo-update/tipo-update.component';
import {TipoService} from '../../tipo/tipo.service';
>>>>>>> e3b323ddedc0734b5731f64f765e56ac2df65e95

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
    InsumoContainerComponent,
    TipoInsumoComponent,
    TipoInsumoCreateComponent,
    TipoInsumoUpdateComponent,
    TipoInsumoIndexComponent,
<<<<<<< HEAD
      UbicacionComponent,
      UbicacionIndexComponent,
      UbicacionUpdateComponent,
      UbicacionCreateComponent,
      InscripcionComponent,
      InscripcionIndexComponent,
      InscripcionUpdateComponent,
      InscripcionCreateComponent,
      OrganizadorComponent,
      OrganizadorIndexComponent,
      OrganizadorUpdateComponent,
      OrganizadorCreateComponent
=======
    UbicacionComponent,
    UbicacionIndexComponent,
    UbicacionUpdateComponent,
    UbicacionCreateComponent,
    SuministroComponent,
    SuministroCreateComponent,
    SuministroIndexComponent,
    SuministroUpdateComponent,
    TipoSuministroComponent,
    TipoSuministroCreateComponent,
    TipoSuministroIndexComponent,
    TipoSuministroUpdateComponent,
    TipoComponent,
    TipoCreateComponent,
    TipoIndexComponent,
    TipoUpdateComponent
>>>>>>> e3b323ddedc0734b5731f64f765e56ac2df65e95
  ],
  providers: [
      OrganizacionService,
      MiembroService,
      EventoService,
      TipoOrganizacionService,
      TipoEventoService,
      TipoPersonaService,
      TipoInsumoService,
      UbicacionService,
<<<<<<< HEAD
      InscripcionService,
      OrganizacionService
=======
      SuministroService,
      TipoSuministroService,
      TipoService
>>>>>>> e3b323ddedc0734b5731f64f765e56ac2df65e95
  ]
})

export class AdminLayoutModule {}
