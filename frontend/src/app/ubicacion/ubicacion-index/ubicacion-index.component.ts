import { Component, OnInit } from '@angular/core';
import {UbicacionService} from "../ubicacion.service";

@Component({
  selector: 'app-ubicacion-index',
  templateUrl: './ubicacion-index.component.html',
  styleUrls: ['./ubicacion-index.component.scss']
})
export class UbicacionIndexComponent implements OnInit {

    provincias: any = null;
    ciudades: any = null;
    pages: any = [];
    constructor(private provinciaService: UbicacionService) {
        this.provinciaService.indexprovincias()
            .subscribe((res: any) => {
                this.provincias = res;
                this.loadPagesprovincia();
            });
        // this.provinciaService.indexciudades()
        //     .subscribe((res: any) => {
        //         this.ciudades = res;
        //         this.loadPages();
        //     });
    }

    ngOnInit() {
    }

    loadPagesprovincia() {
        for (let i = 1; i <= this.provincias.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.provincias.path + '?page=' + i
            });
        }
    }
    loadprovincia(url) {
        this.provinciaService.loadprovincias(url)
            .subscribe((res: any) => {
                this.provincias = res;
            })
    }
    destroyprovincia(provincias, index) {
        if (confirm(`¿Esta seguro de eliminar ${provincias.nombre}?`)) {
            this.provinciaService.destroyprovincias(provincias.provincia_id)
                .subscribe((res: any) => {
                    this.provincias.data.splice(index, 1);
                });
        }
    }
    //list ciudades



}
