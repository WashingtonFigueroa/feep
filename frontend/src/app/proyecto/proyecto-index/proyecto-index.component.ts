import { Component, OnInit } from '@angular/core';
import { environment} from '../../../environments/environment.prod';
import { ProyectoService} from '../../proyecto/proyecto.service';
import {ToastrService} from 'ngx-toastr';

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
    url_base = environment.servidor + 'proyectos-imagen/';
    valor = '';
    constructor(private proyectoService: ProyectoService,
                private toastrService:ToastrService ) {
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
        this.pages = [];
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
    cambiarImagen(id) {
        const imagen: any = document.getElementById('imagen-' + id);
        const archivo = imagen.files[0];
        if (archivo) {
            const formData = new FormData();
            formData.append('imagen', archivo);
            this.proyectoService.cambiarImagen(id, formData)
                .subscribe((res) => {
                    this.proyectos = res;
                    this.current_page = this.proyectos.current_page;
                    this.prev_page = this.proyectos.prev_page_url;
                    this.next_page = this.proyectos.next_page_url;
                    this.last_page = this.proyectos.last_page;
                    this.loadPages();

                    this.toastrService.success(`<span class="now-ui-icons ui-1_bell-53"></span> Imagen subida`, 'Exito!', {
                        timeOut: 4000,
                        closeButton: true,
                        enableHtml: true,
                        toastClass: 'alert alert-success alert-with-icon',
                        positionClass: 'toast-top-right'
                    });
                });
        } else {
            return;
        }
    }
}
