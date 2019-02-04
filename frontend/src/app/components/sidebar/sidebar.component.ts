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
    { path: '/eventos', title: 'Eventos',  icon: 'ui-1_calendar-60', class: '' },
    { path: '/organizadores', title: 'Organizadores',  icon: 'business_badge', class: '' },
    { path: '/inscripciones', title: 'Inscripciones',  icon: 'education_atom', class: '' },
    { path: '/ubicaciones', title: 'Geografía',  icon: 'location_map-big', class: '' },
//    { path: '/notifications', title: 'Geografía',  icon: 'location_map-big', class: '' },
//    { path: '/user-profile', title: 'Users',  icon: 'location_map-big', class: '' },
//    { path: '/table-list', title: 'Table List',  icon: 'design_bullet-list-67', class: '' },
//    { path: '/typography', title: 'Typography',  icon: 'text_caps-small', class: '' },
    { path: '/tipo-insumos', title: 'Insumos',  icon: 'business_briefcase-24', class: '' },
//    { path: '/icons', title: 'Icon',  icon: 'education_atom', class: '' },
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
