import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
<<<<<<< HEAD

    { path: '/dashboard', title: 'Inicio',  icon: 'design_app', class: '' },
=======
   // { path: '/dashboard', title: 'Inicio',  icon: 'design_app', class: '' },
>>>>>>> 7b0cd7fb5d1a2eadb39176a79dc2aa5f8bdcb4b0
    { path: '/organizaciones/listar', title: 'Organizacion',  icon: 'business_bank', class: '' },
    { path: '/miembros/listar', title: 'Personas',  icon: 'users_single-02', class: '' },
    { path: '/proyectos/listar', title: 'Proyectos',  icon: 'business_globe', class: '' },
    { path: '/asignacioneventos', title: 'Asignar Proyectos',  icon: 'business_badge', class: '' },
    { path: '/eventos', title: 'Eventos',  icon: 'ui-1_calendar-60', class: '' },
    { path: '/anexos', title: 'Subir Anexos',  icon: 'arrows-1_cloud-upload-94', class: '' },
    { path: '/asignaciones', title: 'Asignar Insumos',  icon: 'files_box', class: '' },
    { path: '/inscripciones', title: 'Inscripciones',  icon: 'education_atom', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
  go(url: string) {
      console.log(url);
      this.router.navigate([url]);
  }
}
