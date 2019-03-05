import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'design_app', class: '' },
    { path: '/organizaciones', title: 'Organizacion',  icon: 'business_bank', class: '' },
    { path: '/miembros', title: 'Personas',  icon: 'users_single-02', class: '' },
    { path: '/proyectos', title: 'Proyectos',  icon: 'business_globe', class: '' },
    { path: '/asignacioneventos', title: 'Asignar Proyectos',  icon: 'business_badge', class: '' },
    { path: '/eventos', title: 'Eventos',  icon: 'ui-1_calendar-60', class: '' },
    { path: '/anexos', title: 'Subir Anexos',  icon: 'arrows-1_cloud-upload-94', class: '' },
    { path: '/asignaciones', title: 'Asignar Insumos',  icon: 'files_box', class: '' },
    { path: '/inscripciones', title: 'Inscripciones',  icon: 'education_atom', class: '' },
    //{ path: '/insumos', title: 'Insumos',  icon: 'business_briefcase-24', class: '' },
    //{ path: '/ubicaciones', title: 'Ubicación',  icon: 'location_map-big', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
