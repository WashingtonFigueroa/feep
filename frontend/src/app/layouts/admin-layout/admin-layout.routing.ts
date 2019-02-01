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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'organizacion',  component: OrganizacionComponent,
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
];
