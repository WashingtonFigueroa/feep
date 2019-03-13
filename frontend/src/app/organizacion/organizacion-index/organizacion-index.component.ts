import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {OrganizacionService} from '../organizacion.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-organizacion-index',
  templateUrl: './organizacion-index.component.html',
  styleUrls: ['./organizacion-index.component.scss']
})
export class OrganizacionIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    organizaciones: any = null;
    url_base = environment.servidor + 'organizaciones-imagen/';
    valor = '';
    constructor(private organizacionService: OrganizacionService,
                private toastr: ToastrService) {
        this.organizacionService.index()
            .subscribe((res: any) => {
                this.organizaciones = res;
                this.current_page = this.organizaciones.current_page;
                this.prev_page = this.organizaciones.prev_page_url;
                this.next_page = this.organizaciones.next_page_url;
                this.last_page = this.organizaciones.last_page;
                this.loadPages();
            });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.organizaciones.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.organizaciones.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.organizacionService.pagination(url)
            .subscribe((res: any) => {
                this.organizaciones = res;
                this.current_page = this.organizaciones.current_page;
                this.prev_page = this.organizaciones.prev_page_url;
                this.next_page = this.organizaciones.next_page_url;
                this.last_page = this.organizaciones.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.organizacionService.buscar(valor)
            .subscribe((res: any) => {
                this.organizaciones = res;
                this.current_page = this.organizaciones.current_page;
                this.prev_page = this.organizaciones.prev_page_url;
                this.next_page = this.organizaciones.next_page_url;
                this.last_page = this.organizaciones.last_page;
                this.loadPages();
            });
    }
    destroy(organizacion, index) {
        if (confirm('Esta seguro de eliminar al organizacion ' + organizacion.nombre)) {
            this.organizacionService.destroy(organizacion.organizacion_id)
                .subscribe((res: any) => {
                    this.organizaciones.data.splice(index, 1);
                });
        }
    }
    cambiarImagen(id) {
        const imagen: any = document.getElementById('imagen-' + id);
        const archivo = imagen.files[0];
        if (archivo) {
            const formData = new FormData();
            formData.append('imagen', archivo);
            this.organizacionService.cambiarImagen(id, formData)
                .subscribe((res) => {
                    this.organizaciones = res;
                    this.current_page = this.organizaciones.current_page;
                    this.prev_page = this.organizaciones.prev_page_url;
                    this.next_page = this.organizaciones.next_page_url;
                    this.last_page = this.organizaciones.last_page;
                    this.loadPages();

                    this.toastr.success(`<span class="now-ui-icons ui-1_bell-53"></span> Imagen subida`, 'Exito!', {
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
