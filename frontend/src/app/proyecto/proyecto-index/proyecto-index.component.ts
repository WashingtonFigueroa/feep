import { Component, OnInit } from '@angular/core';
import { environment} from '../../../environments/environment.prod';
import { ProyectoService} from '../../proyecto/proyecto.service';

@Component({
  selector: 'app-proyecto-index',
  templateUrl: './proyecto-index.component.html',
  styleUrls: ['./proyecto-index.component.scss']
})
export class ProyectoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    proyectos: any = null;
    url_base = environment.servidor + 'proyectos-imagen/'
    valor = '';
    constructor(private proyectoService: ProyectoService) {
        this.proyectoService.index().subscribe((res: any) => {
                this.proyectos = res;
                this.current_page = this.proyectos.current_page;
                this.prev_page = this.proyectos.prev_page_url;
                this.next_page = this.proyectos.next_page_url;
                this.last_page = this.proyectos.last_page;
                this.loadPages();
            });
    }
    ngOnInit() {
    }
    loadPages() {
        for (let i = 1; i <= this.proyectos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.proyectos.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.proyectoService.pagination(url)
            .subscribe((res: any) => {
                this.proyectos = res;
                this.current_page = this.proyectos.current_page;
                this.prev_page = this.proyectos.prev_page_url;
                this.next_page = this.proyectos.next_page_url;
                this.last_page = this.proyectos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.proyectoService.buscar(valor)
            .subscribe((res: any) => {
                this.proyectos = res;
                this.current_page = this.proyectos.current_page;
                this.prev_page = this.proyectos.prev_page_url;
                this.next_page = this.proyectos.next_page_url;
                this.last_page = this.proyectos.last_page;
                this.loadPages();
            });
    }
    destroy(proyecto, index) {
        if (confirm('Esta seguro de eliminar al proyecto ' + proyecto.nombre)) {
            this.proyectoService.destroy(proyecto.proyecto_id)
                .subscribe((res: any) => {
                    this.proyectos.data.splice(index, 1);
                });
        }
    }
}
