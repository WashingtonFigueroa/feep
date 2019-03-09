import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
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
import {UbicacionService} from '../../ubicacion/ubicacion.service';
import { InscripcionComponent } from '../../inscripcion/inscripcion.component';
import { InscripcionIndexComponent } from '../../inscripcion/inscripcion-index/inscripcion-index.component';
import { InscripcionUpdateComponent } from '../../inscripcion/inscripcion-update/inscripcion-update.component';
import { InscripcionCreateComponent } from '../../inscripcion/inscripcion-create/inscripcion-create.component';
import {InscripcionService} from '../../inscripcion/inscripcion.service';
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
import {UsuarioComponent} from '../../usuario/usuario.component';
import {UsuarioCreateComponent} from '../../usuario/usuario-create/usuario-create.component';
import {UsuarioIndexComponent} from '../../usuario/usuario-index/usuario-index.component';
import {UsuarioUpdateComponent} from '../../usuario/usuario-update/usuario-update.component';
import {AsignacionComponent} from '../../asignacion/asignacion.component';
import {AsignacionCreateComponent} from '../../asignacion/asignacion-create/asignacion-create.component';
import {AsignacionUpdateComponent} from '../../asignacion/asignacion-update/asignacion-update.component';
import {AsignacionIndexComponent} from '../../asignacion/asignacion-index/asignacion-index.component';
import {UsuarioService} from '../../usuario/usuario.service';
import {AsignacionService} from '../../asignacion/asignacion.service';
import { ActividadComponent } from '../../actividad/actividad.component';
import { ActividadIndexComponent } from '../../actividad/actividad-index/actividad-index.component';
import { ActividadUpdateComponent } from '../../actividad/actividad-update/actividad-update.component';
import { ActividadCreateComponent } from '../../actividad/actividad-create/actividad-create.component';
import { ActividadService} from '../../actividad/actividad.service';
import { ProyectoComponent } from '../../proyecto/proyecto.component';
import { ProyectoIndexComponent } from '../../proyecto/proyecto-index/proyecto-index.component';
import { ProyectoUpdateComponent } from '../../proyecto/proyecto-update/proyecto-update.component';
import { ProyectoCreateComponent } from '../../proyecto/proyecto-create/proyecto-create.component';
import { EjecutoraComponent } from '../../ejecutora/ejecutora.component';
import { EjecutoraIndexComponent } from '../../ejecutora/ejecutora-index/ejecutora-index.component';
import { EjecutoraUpdateComponent } from '../../ejecutora/ejecutora-update/ejecutora-update.component';
import { EjecutoraCreateComponent } from '../../ejecutora/ejecutora-create/ejecutora-create.component';
import {ProyectoService} from '../../proyecto/proyecto.service';
import {EjecutoraService} from '../../ejecutora/ejecutora.service';
import { TipoProyectoComponent } from '../../tipo-proyecto/tipo-proyecto.component';
import { TipoProyectoIndexComponent } from '../../tipo-proyecto/tipo-proyecto-index/tipo-proyecto-index.component';
import { TipoProyectoUpdateComponent } from '../../tipo-proyecto/tipo-proyecto-update/tipo-proyecto-update.component';
import { TipoProyectoCreateComponent } from '../../tipo-proyecto/tipo-proyecto-create/tipo-proyecto-create.component';
import {TipoProyectoService} from '../../tipo-proyecto/tipo-proyecto.service';
import { AsignacionEventoComponent } from '../../asignacion-evento/asignacion-evento.component';
import { AsignacionEventoIndexComponent } from '../../asignacion-evento/asignacion-evento-index/asignacion-evento-index.component';
import {AsignacionEventoService} from '../../asignacion-evento/asignacion-evento.service';
import { AsignacionEventoCreateComponent } from '../../asignacion-evento/asignacion-evento-create/asignacion-evento-create.component';
import { AsignacionEventoUpdateComponent } from '../../asignacion-evento/asignacion-evento-update/asignacion-evento-update.component';
import { AnexoComponent } from '../../anexo/anexo.component';
import { AnexoIndexComponent } from '../../anexo/anexo-index/anexo-index.component';
import { AnexoCreateComponent } from '../../anexo/anexo-create/anexo-create.component';
import { AnexoUpdateComponent } from '../../anexo/anexo-update/anexo-update.component';
import {AnexoService} from '../../anexo/anexo.service';
import {CargoComponent} from '../../cargo/cargo.component';
import {CargoIndexComponent} from '../../cargo/cargo-index/cargo-index.component';
import {CargoCreateComponent} from '../../cargo/cargo-create/cargo-create.component';
import {CargoEditComponent} from '../../cargo/cargo-edit/cargo-edit.component';
import {PrivilegioComponent} from '../../privilegio/privilegio.component';
import {CargoService} from '../../cargo/cargo.service';
import {PrivilegioService} from '../../privilegio/privilegio.service';

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
    FormsModule,
    NgSelectModule
  ],
  declarations: [
    DashboardComponent,
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
    UbicacionComponent,
    UbicacionIndexComponent,
    UbicacionUpdateComponent,
    UbicacionCreateComponent,
    InscripcionComponent,
    InscripcionIndexComponent,
    InscripcionUpdateComponent,
    InscripcionCreateComponent,
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
    TipoUpdateComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioIndexComponent,
    UsuarioUpdateComponent,
    AsignacionComponent,
    AsignacionCreateComponent,
    AsignacionUpdateComponent,
    AsignacionIndexComponent,
    ActividadComponent,
    ActividadIndexComponent,
    ActividadUpdateComponent,
    ActividadCreateComponent,
    ProyectoComponent,
    ProyectoIndexComponent,
    ProyectoUpdateComponent,
    ProyectoCreateComponent,
    EjecutoraComponent,
    EjecutoraIndexComponent,
    EjecutoraUpdateComponent,
    EjecutoraCreateComponent,
      TipoProyectoComponent,
      TipoProyectoIndexComponent,
      TipoProyectoUpdateComponent,
      TipoProyectoCreateComponent,
      AsignacionEventoComponent,
      AsignacionEventoIndexComponent,
      AsignacionEventoCreateComponent,
      AsignacionEventoUpdateComponent,
      AnexoComponent,
      AnexoIndexComponent,
      AnexoCreateComponent,
      AnexoUpdateComponent,
      CargoComponent,
      CargoIndexComponent,
      CargoCreateComponent,
      CargoEditComponent,
      PrivilegioComponent
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
      InscripcionService,
      OrganizacionService,
      SuministroService,
      TipoSuministroService,
      TipoService,
      UsuarioService,
      AsignacionService,
      ActividadService,
      ProyectoService,
      EjecutoraService,
      TipoProyectoService,
      AsignacionEventoService,
      AnexoService,
      CargoService,
      PrivilegioService
  ]
})

export class AdminLayoutModule {}
