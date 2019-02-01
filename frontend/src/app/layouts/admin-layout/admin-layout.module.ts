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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
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
    OrganizacionUpdateComponent
  ],
  providers: [
      OrganizacionService
  ]
})

export class AdminLayoutModule {}
