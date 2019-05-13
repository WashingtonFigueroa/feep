import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'design_app', class: '' },
    { path: '/organizaciones/listar', title: 'Organizacion',  icon: 'business_bank', class: '' },
    { path: '/miembros/listar', title: 'Beneficiarios',  icon: 'users_single-02', class: '' },
    { path: '/proyectos/listar', title: 'Proyectos',  icon: 'business_globe', class: '' },
    { path: '/asignacioneventos', title: 'Asignar Proyectos',  icon: 'business_badge', class: '' },
    { path: '/eventos', title: 'Eventos',  icon: 'ui-1_calendar-60', class: '' },
    { path: '/anexos', title: 'Subir Anexos',  icon: 'arrows-1_cloud-upload-94', class: '' },
    { path: '/asignaciones', title: 'Asignar Insumos',  icon: 'files_box', class: '' },
    { path: '/resumenes', title: 'Conteo Rapido',  icon: 'education_atom', class: '' },
    { path: '/inscripciones', title: 'Registro',  icon: 'design_bullet-list-67', class: '' },
    { path: '/reportes', title: 'Reporte',  icon: 'files_single-copy-04', class: '' }
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
     // console.log(url);
      this.router.navigate([url]);
  }
}
