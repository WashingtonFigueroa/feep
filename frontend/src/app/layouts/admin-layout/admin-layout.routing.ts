import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {OrganizacionComponent} from '../../organizacion/organizacion.component';
import {OrganizacionIndexComponent} from '../../organizacion/organizacion-index/organizacion-index.component';
import {OrganizacionCreateComponent} from '../../organizacion/organizacion-create/organizacion-create.component';
import {OrganizacionUpdateComponent} from '../../organizacion/organizacion-update/organizacion-update.component';
import {TipoOrganizacionComponent} from '../../tipo-organizacion/tipo-organizacion.component';
import {TipoOrganizacionIndexComponent} from '../../tipo-organizacion/tipo-organizacion-index/tipo-organizacion-index.component';
import {TipoOrganizacionCreateComponent} from '../../tipo-organizacion/tipo-organizacion-create/tipo-organizacion-create.component';
import {TipoOrganizacionUpdateComponent} from '../../tipo-organizacion/tipo-organizacion-update/tipo-organizacion-update.component';
import {MiembroComponent} from '../../miembro/miembro.component';
import {MiembroIndexComponent} from '../../miembro/miembro-index/miembro-index.component';
import {MiembroCreateComponent} from '../../miembro/miembro-create/miembro-create.component';
import {MiembroUpdateComponent} from '../../miembro/miembro-update/miembro-update.component';
import {TipoPersonaComponent} from '../../tipo-persona/tipo-persona.component';
import {TipoPersonaIndexComponent} from '../../tipo-persona/tipo-persona-index/tipo-persona-index.component';
import {TipoPersonaCreateComponent} from '../../tipo-persona/tipo-persona-create/tipo-persona-create.component';
import {TipoPersonaUpdateComponent} from '../../tipo-persona/tipo-persona-update/tipo-persona-update.component';
import {EventoComponent} from '../../evento/evento.component';
import {EventoIndexComponent} from '../../evento/evento-index/evento-index.component';
import {EventoCreateComponent} from '../../evento/evento-create/evento-create.component';
import {EventoUpdateComponent} from '../../evento/evento-update/evento-update.component';
import {TipoEventoComponent} from '../../tipo-evento/tipo-evento.component';
import {TipoEventoIndexComponent} from '../../tipo-evento/tipo-evento-index/tipo-evento-index.component';
import {TipoEventoCreateComponent} from '../../tipo-evento/tipo-evento-create/tipo-evento-create.component';
import {TipoEventoUpdateComponent} from '../../tipo-evento/tipo-evento-update/tipo-evento-update.component';
import {TipoInsumoComponent} from '../../tipo-insumo/tipo-insumo.component';
import {TipoInsumoIndexComponent} from '../../tipo-insumo/tipo-insumo-index/tipo-insumo-index.component';
import {TipoInsumoCreateComponent} from '../../tipo-insumo/tipo-insumo-create/tipo-insumo-create.component';
import {TipoInsumoUpdateComponent} from '../../tipo-insumo/tipo-insumo-update/tipo-insumo-update.component';
import {UbicacionComponent} from "../../ubicacion/ubicacion.component";
import {UbicacionIndexComponent} from "../../ubicacion/ubicacion-index/ubicacion-index.component";
import {UbicacionCreateComponent} from "../../ubicacion/ubicacion-create/ubicacion-create.component";
import {UbicacionUpdateComponent} from "../../ubicacion/ubicacion-update/ubicacion-update.component";
import {OrganizadorComponent} from "../../organizador/organizador.component";
import {OrganizadorIndexComponent} from "../../organizador/organizador-index/organizador-index.component";
import {OrganizadorCreateComponent} from "../../organizador/organizador-create/organizador-create.component";
import {OrganizadorUpdateComponent} from "../../organizador/organizador-update/organizador-update.component";
import {InscripcionComponent} from "../../inscripcion/inscripcion.component";
import {InscripcionIndexComponent} from "../../inscripcion/inscripcion-index/inscripcion-index.component";
import {InscripcionCreateComponent} from "../../inscripcion/inscripcion-create/inscripcion-create.component";
import {InscripcionUpdateComponent} from "../../inscripcion/inscripcion-update/inscripcion-update.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'organizaciones',  component: OrganizacionComponent,
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
    { path: 'tipoorganizacion',  component: TipoOrganizacionComponent,
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
    { path: 'miembros',  component: MiembroComponent,
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
    { path: 'tipopersona',  component: TipoPersonaComponent,
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
    { path: 'eventos',  component: EventoComponent,
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
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'tipoeventos',  component: TipoEventoComponent,
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
    { path: 'tipo-insumos',  component: TipoInsumoComponent,
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
            },
        ]
    },
    { path: 'ubicaciones',  component: UbicacionComponent,
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
    { path: 'organizadores',  component: OrganizadorComponent,
        children: [
            {
                path: 'listar',
                component: OrganizadorIndexComponent
            },
            {
                path: 'crear',
                component: OrganizadorCreateComponent
            },
            {
                path: 'editar/:id',
                component: OrganizadorUpdateComponent
            },
            {
                path: '',
                redirectTo: 'listar'
            },
        ]
    },
    { path: 'inscripciones',  component: InscripcionComponent,
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

];
