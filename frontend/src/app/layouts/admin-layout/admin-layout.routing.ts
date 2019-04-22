import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { OrganizacionComponent } from '../../organizacion/organizacion.component';
import { OrganizacionIndexComponent } from '../../organizacion/organizacion-index/organizacion-index.component';
import { OrganizacionCreateComponent } from '../../organizacion/organizacion-create/organizacion-create.component';
import { OrganizacionUpdateComponent } from '../../organizacion/organizacion-update/organizacion-update.component';
import { TipoOrganizacionComponent } from '../../tipo-organizacion/tipo-organizacion.component';
import { TipoOrganizacionIndexComponent } from '../../tipo-organizacion/tipo-organizacion-index/tipo-organizacion-index.component';
import { TipoOrganizacionCreateComponent } from '../../tipo-organizacion/tipo-organizacion-create/tipo-organizacion-create.component';
import { TipoOrganizacionUpdateComponent } from '../../tipo-organizacion/tipo-organizacion-update/tipo-organizacion-update.component';
import { MiembroComponent } from '../../miembro/miembro.component';
import { MiembroIndexComponent } from '../../miembro/miembro-index/miembro-index.component';
import { MiembroCreateComponent } from '../../miembro/miembro-create/miembro-create.component';
import { MiembroUpdateComponent } from '../../miembro/miembro-update/miembro-update.component';
import { TipoPersonaComponent } from '../../tipo-persona/tipo-persona.component';
import { TipoPersonaIndexComponent } from '../../tipo-persona/tipo-persona-index/tipo-persona-index.component';
import { TipoPersonaCreateComponent } from '../../tipo-persona/tipo-persona-create/tipo-persona-create.component';
import { TipoPersonaUpdateComponent } from '../../tipo-persona/tipo-persona-update/tipo-persona-update.component';
import { EventoComponent } from '../../evento/evento.component';
import { EventoIndexComponent } from '../../evento/evento-index/evento-index.component';
import { EventoCreateComponent } from '../../evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from '../../evento/evento-update/evento-update.component';
import { TipoEventoComponent } from '../../tipo-evento/tipo-evento.component';
import { TipoEventoIndexComponent } from '../../tipo-evento/tipo-evento-index/tipo-evento-index.component';
import { TipoEventoCreateComponent } from '../../tipo-evento/tipo-evento-create/tipo-evento-create.component';
import { TipoEventoUpdateComponent } from '../../tipo-evento/tipo-evento-update/tipo-evento-update.component';
import { TipoInsumoComponent } from '../../tipo-insumo/tipo-insumo.component';
import { TipoInsumoIndexComponent } from '../../tipo-insumo/tipo-insumo-index/tipo-insumo-index.component';
import { TipoInsumoCreateComponent } from '../../tipo-insumo/tipo-insumo-create/tipo-insumo-create.component';
import { TipoInsumoUpdateComponent } from '../../tipo-insumo/tipo-insumo-update/tipo-insumo-update.component';
import { UbicacionComponent } from '../../ubicacion/ubicacion.component';
import { UbicacionIndexComponent } from '../../ubicacion/ubicacion-index/ubicacion-index.component';
import { UbicacionCreateComponent } from '../../ubicacion/ubicacion-create/ubicacion-create.component';
import { UbicacionUpdateComponent } from '../../ubicacion/ubicacion-update/ubicacion-update.component';
import { InscripcionComponent } from '../../inscripcion/inscripcion.component';
import { InscripcionIndexComponent } from '../../inscripcion/inscripcion-index/inscripcion-index.component';
import { InscripcionCreateComponent } from '../../inscripcion/inscripcion-create/inscripcion-create.component';
import { InscripcionUpdateComponent } from '../../inscripcion/inscripcion-update/inscripcion-update.component';
import { InsumoContainerComponent } from '../../insumo-container/insumo-container.component';
import { SuministroComponent } from '../../suministro/suministro.component';
import { SuministroIndexComponent } from '../../suministro/suministro-index/suministro-index.component';
import { SuministroCreateComponent } from '../../suministro/suministro-create/suministro-create.component';
import { SuministroUpdateComponent } from '../../suministro/suministro-update/suministro-update.component';
import { TipoSuministroComponent } from '../../tipo-suministro/tipo-suministro.component';
import { TipoSuministroIndexComponent } from '../../tipo-suministro/tipo-suministro-index/tipo-suministro-index.component';
import { TipoSuministroCreateComponent } from '../../tipo-suministro/tipo-suministro-create/tipo-suministro-create.component';
import { TipoSuministroUpdateComponent } from '../../tipo-suministro/tipo-suministro-update/tipo-suministro-update.component';
import { TipoComponent } from '../../tipo/tipo.component';
import { TipoIndexComponent } from '../../tipo/tipo-index/tipo-index.component';
import { TipoCreateComponent } from '../../tipo/tipo-create/tipo-create.component';
import { TipoUpdateComponent } from '../../tipo/tipo-update/tipo-update.component';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { UsuarioIndexComponent } from '../../usuario/usuario-index/usuario-index.component';
import { UsuarioCreateComponent } from '../../usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from '../../usuario/usuario-update/usuario-update.component';
import { AsignacionComponent } from '../../asignacion/asignacion.component';
import { AsignacionIndexComponent } from '../../asignacion/asignacion-index/asignacion-index.component';
import { AsignacionCreateComponent } from '../../asignacion/asignacion-create/asignacion-create.component';
import { AsignacionUpdateComponent } from '../../asignacion/asignacion-update/asignacion-update.component';
import {ActividadComponent} from '../../actividad/actividad.component';
import {ActividadIndexComponent} from '../../actividad/actividad-index/actividad-index.component';
import {ActividadCreateComponent} from '../../actividad/actividad-create/actividad-create.component';
import {ActividadUpdateComponent} from '../../actividad/actividad-update/actividad-update.component';
import {ProyectoComponent} from '../../proyecto/proyecto.component';
import {ProyectoIndexComponent} from '../../proyecto/proyecto-index/proyecto-index.component';
import {ProyectoCreateComponent} from '../../proyecto/proyecto-create/proyecto-create.component';
import {ProyectoUpdateComponent} from '../../proyecto/proyecto-update/proyecto-update.component';
import {EjecutoraComponent} from '../../ejecutora/ejecutora.component';
import {EjecutoraIndexComponent} from '../../ejecutora/ejecutora-index/ejecutora-index.component';
import {EjecutoraCreateComponent} from '../../ejecutora/ejecutora-create/ejecutora-create.component';
import {EjecutoraUpdateComponent} from '../../ejecutora/ejecutora-update/ejecutora-update.component';
import {TipoProyectoComponent} from '../../tipo-proyecto/tipo-proyecto.component';
import {TipoProyectoIndexComponent} from '../../tipo-proyecto/tipo-proyecto-index/tipo-proyecto-index.component';
import {TipoProyectoCreateComponent} from '../../tipo-proyecto/tipo-proyecto-create/tipo-proyecto-create.component';
import {TipoProyectoUpdateComponent} from '../../tipo-proyecto/tipo-proyecto-update/tipo-proyecto-update.component';
import {AsignacionEventoComponent} from '../../asignacion-evento/asignacion-evento.component';
import {AsignacionEventoIndexComponent} from '../../asignacion-evento/asignacion-evento-index/asignacion-evento-index.component';
import {AsignacionEventoCreateComponent} from '../../asignacion-evento/asignacion-evento-create/asignacion-evento-create.component';
import {AsignacionEventoUpdateComponent} from '../../asignacion-evento/asignacion-evento-update/asignacion-evento-update.component';
import {AnexoComponent} from '../../anexo/anexo.component';
import {AnexoIndexComponent} from '../../anexo/anexo-index/anexo-index.component';
import {AnexoCreateComponent} from '../../anexo/anexo-create/anexo-create.component';
import {AnexoUpdateComponent} from '../../anexo/anexo-update/anexo-update.component';
import {CargoComponent} from '../../cargo/cargo.component';
import {CargoIndexComponent} from '../../cargo/cargo-index/cargo-index.component';
import {CargoCreateComponent} from '../../cargo/cargo-create/cargo-create.component';
import {CargoEditComponent} from '../../cargo/cargo-edit/cargo-edit.component';
import {PrivilegioComponent} from '../../privilegio/privilegio.component';
import {AuthGuard} from '../../auth.guard';
import {ResumenComponent} from '../../resumen/resumen.component';
import {ResumenIndexComponent} from '../../resumen/resumen-index/resumen-index.component';
import {ResumenCreateComponent} from '../../resumen/resumen-create/resumen-create.component';
import {ResumenUpdateComponent} from '../../resumen/resumen-update/resumen-update.component';
import {EventoReporteComponent} from '../../evento/evento-reporte/evento-reporte.component';
import {ReporteComponent} from '../../reporte/reporte.component';
import {Reporte1Component} from '../../reporte/reporte-1/reporte-1.component';
import {Reporte2Component} from '../../reporte/reporte-2/reporte-2.component';
import {Reporte3Component} from '../../reporte/reporte-3/reporte-3.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'organizaciones',  component: OrganizacionComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: OrganizacionIndexComponent
            },
            {
                path: 'crear',
                component: OrganizacionCreateComponent
            },
            {
                path: 'editar/:id',
                component: OrganizacionUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'tipoorganizacion',  component: TipoOrganizacionComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: TipoOrganizacionIndexComponent
            },
            {
                path: 'crear',
                component: TipoOrganizacionCreateComponent
            },
            {
                path: 'editar/:id',
                component: TipoOrganizacionUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'reportes',  component: ReporteComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'reporte1',
                component: Reporte1Component
            },
            {
                path: 'reporte2',
                component: Reporte2Component
            },
            {
                path: 'reporte3',
                component: Reporte3Component
            },
            {
                path: '',
                redirectTo: 'reporte1'
            },
        ]
    },
    { path: 'asignacioneventos',  component: AsignacionEventoComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: AsignacionEventoIndexComponent
            },
            {
                path: 'crear',
                component: AsignacionEventoCreateComponent
            },
            {
                path: 'editar/:id',
                component: AsignacionEventoUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'miembros',  component: MiembroComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: MiembroIndexComponent
            },
            {
                path: 'crear',
                component: MiembroCreateComponent
            },
            {
                path: 'editar/:id',
                component: MiembroUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'anexos',  component: AnexoComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: AnexoIndexComponent
            },
            {
                path: 'crear',
                component: AnexoCreateComponent
            },
            {
                path: 'editar/:id',
                component: AnexoUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'tipopersona',  component: TipoPersonaComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: TipoPersonaIndexComponent
            },
            {
                path: 'crear',
                component: TipoPersonaCreateComponent
            },
            {
                path: 'editar/:id',
                component: TipoPersonaUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'tipoproyectos',  component: TipoProyectoComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: TipoProyectoIndexComponent
            },
            {
                path: 'crear',
                component: TipoProyectoCreateComponent
            },
            {
                path: 'editar/:id',
                component: TipoProyectoUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'proyectos',  component: ProyectoComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: ProyectoIndexComponent
            },
            {
                path: 'crear',
                component: ProyectoCreateComponent
            },
            {
                path: 'editar/:id',
                component: ProyectoUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'ejecutoras',  component: EjecutoraComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: EjecutoraIndexComponent
            },
            {
                path: 'crear',
                component: EjecutoraCreateComponent
            },
            {
                path: 'editar/:id',
                component: EjecutoraUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'eventos',  component: EventoComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: EventoIndexComponent
            },
            {
                path: 'crear',
                component: EventoCreateComponent
            },
            {
                path: 'editar/:id',
                component: EventoUpdateComponent
            },
            {
                path: 'reporte/:id',
                component: EventoReporteComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'resumenes',  component: ResumenComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: ResumenIndexComponent
            },
            {
                path: 'crear',
                component: ResumenCreateComponent
            },
            {
                path: 'editar/:id',
                component: ResumenUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'tipoeventos',  component: TipoEventoComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: TipoEventoIndexComponent
            },
            {
                path: 'crear',
                component: TipoEventoCreateComponent
            },
            {
                path: 'editar/:id',
                component: TipoEventoUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'ubicaciones',  component: UbicacionComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: UbicacionIndexComponent
            },
            {
                path: 'crear',
                component: UbicacionCreateComponent
            },
            {
                path: 'editar/:id',
                component: UbicacionUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'insumos',  component: InsumoContainerComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'tipo-insumos',
                component: TipoInsumoComponent,
                children: [
                    {
                        path: 'listar',
                        component: TipoInsumoIndexComponent
                    },
                    {
                        path: 'crear',
                        component: TipoInsumoCreateComponent
                    },
                    {
                        path: 'editar/:id',
                        component: TipoInsumoUpdateComponent
                    },
                    {
                        path: '',
                        redirectTo: 'listar'
                    }
                ]
            },
            {
                path: 'suministros',
                component: SuministroComponent,
                children: [
                    {
                        path: 'listar',
                        component: SuministroIndexComponent
                    },
                    {
                        path: 'crear',
                        component: SuministroCreateComponent
                    },
                    {
                        path: 'editar/:id',
                        component: SuministroUpdateComponent
                    },
                    {
                        path: '',
                        redirectTo: 'listar'
                    }
                ]
            },
            {
                path: 'tipo-suministros',
                component: TipoSuministroComponent,
                children: [
                    {
                        path: 'listar',
                        component: TipoSuministroIndexComponent
                    },
                    {
                        path: 'crear',
                        component: TipoSuministroCreateComponent
                    },
                    {
                        path: 'editar/:id',
                        component: TipoSuministroUpdateComponent
                    },
                    {
                        path: '',
                        redirectTo: 'listar'
                    }
                ]
            },
            {
                path: 'tipos',
                component: TipoComponent,
                children: [
                    {
                        path: 'listar',
                        component: TipoIndexComponent
                    },
                    {
                        path: 'crear',
                        component: TipoCreateComponent
                    },
                    {
                        path: 'editar/:id',
                        component: TipoUpdateComponent
                    },
                    {
                        path: '',
                        redirectTo: 'listar'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tipo-insumos',
                pathMatch: 'full'
            }
        ]
    },
    { path: 'inscripciones',  component: InscripcionComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: InscripcionIndexComponent
            },
            {
                path: 'crear',
                component: InscripcionCreateComponent
            },
            {
                path: 'editar/:id',
                component: InscripcionUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'actividades',  component: ActividadComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: ActividadIndexComponent
            },
            {
                path: 'crear',
                component: ActividadCreateComponent
            },
            {
                path: 'editar/:id',
                component: ActividadUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'usuarios',  component: UsuarioComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: UsuarioIndexComponent
            },
            {
                path: 'crear',
                component: UsuarioCreateComponent
            },
            {
                path: 'editar/:id',
                component: UsuarioUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'asignaciones',  component: AsignacionComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'listar',
                component: AsignacionIndexComponent
            },
            {
                path: 'crear',
                component: AsignacionCreateComponent
            },
            {
                path: 'editar/:id',
                component: AsignacionUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            }
        ]
    },
    { path: 'cargos', component: CargoComponent, canActivate: [AuthGuard], children: [
            {
                path: 'listar',
                component: CargoIndexComponent
            },
            {
                path: 'crear',
                component: CargoCreateComponent
            },
            {
                path: 'editar/:cargo_id',
                component: CargoEditComponent
            },
            {
                path: '',
                redirectTo: 'listar',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'privilegios',
        canActivate: [AuthGuard],
        component: PrivilegioComponent
    }
];
